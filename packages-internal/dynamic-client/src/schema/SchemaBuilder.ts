import type {
  $SchemaRef,
  SchemaTraits,
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";
import { SCHEMA, TypeRegistry } from "@smithy/core/schema";
import { ServiceException } from "@smithy/core/client";

import type { ModelIndex } from "../ast/ModelIndex";
import { parseShapeId } from "../ast/ModelIndex";
import type { AstMember, AstShape } from "../ast/types";
import { sentinelForSimpleShape } from "./simpleShapes";

/**
 * The unit shape sentinel understood by the schema runtime.
 * @internal
 */
const UNIT = "unit";

/**
 * Prefix for the synthetic, unmodeled service base exception namespace, matching
 * the convention used by the smithy-typescript code generator.
 * @internal
 */
const SYNTHETIC_PREFIX = "smithy.ts.sdk.synthetic.";

/**
 * The result of walking an AST into runtime schemas.
 *
 * @internal
 */
export interface BuiltSchemas {
  /**
   * Named static schemas keyed by their `<Name>$` export symbol.
   */
  schemas: Record<string, StaticSchema>;
  /**
   * Operation static schemas keyed by `<OperationName>$`.
   */
  operations: Record<string, StaticOperationSchema>;
  /**
   * The synthetic service base exception schema.
   */
  baseException: StaticErrorSchema;
  /**
   * Registries containing modeled errors, for protocol error resolution.
   */
  errorTypeRegistries: TypeRegistry[];
}

/**
 * Walks a Smithy JSON AST and produces runtime static schemas for every named
 * aggregate shape and operation, registering them in per-namespace
 * {@link TypeRegistry} instances.
 *
 * Schemas reference each other lazily through `() => schema` thunks so that
 * recursive and forward references resolve without ordering constraints. Simple
 * shapes without runtime-relevant traits are represented inline by their
 * numeric sentinel rather than a named schema.
 *
 * @internal
 */
export class SchemaBuilder {
  private readonly schemas: Record<string, StaticSchema> = {};
  private readonly operations: Record<string, StaticOperationSchema> = {};
  private readonly errorRegistries = new Map<string, TypeRegistry>();
  private readonly visiting = new Set<string>();

  /**
   * @param index - the AST model index.
   */
  public constructor(private readonly index: ModelIndex) {}

  /**
   * Builds all schemas reachable from the service's operations, and registers
   * all error shapes from the model.
   *
   * @returns the built schemas, operations, synthetic base exception, and error
   *   registries.
   */
  public build(): BuiltSchemas {
    const baseException = this.buildBaseException();

    // Register ALL error shapes from the model, not just operation-referenced ones.
    // Services may return errors not listed in individual operation error lists.
    this.index.forEachShape((shapeId, shape) => {
      if (shape.traits && "smithy.api#error" in shape.traits) {
        this.buildError(shapeId);
      }
    });

    for (const operationId of this.index.getOperationIds()) {
      this.buildOperation(operationId);
    }

    return {
      schemas: this.schemas,
      operations: this.operations,
      baseException,
      errorTypeRegistries: [...this.errorRegistries.values()],
    };
  }

  /**
   * @returns the `$SchemaRef` to use wherever `shapeId` is referenced. Simple
   *   shapes resolve to a sentinel (or inline list/map modifier); aggregate and
   *   trait-bearing shapes resolve to a lazy thunk over the named schema.
   */
  private ref(shapeId: string): $SchemaRef {
    if (shapeId === "smithy.api#Unit") {
      return UNIT as unknown as $SchemaRef;
    }

    const shape = this.index.getShape(shapeId);
    if (!shape) {
      // Prelude simple shapes (e.g. smithy.api#String) are not present in the
      // AST; resolve them by their well-known name.
      const preludeSentinel = preludeSimpleSentinel(shapeId);
      if (preludeSentinel !== undefined) {
        return preludeSentinel as $SchemaRef;
      }
      throw new Error(`@smithy/dynamic-client - unresolved shape reference: ${shapeId}`);
    }

    const inline = this.inlineSimpleOrCollection(shape);
    if (inline !== undefined) {
      return inline as $SchemaRef;
    }

    // Named aggregate or trait-bearing shape: ensure it is built and refer to
    // it lazily to support recursion.
    this.ensureNamed(shapeId, shape);
    const symbol = symbolOf(shapeId);
    const schemas = this.schemas;
    return (() => schemas[symbol]) as $SchemaRef;
  }

  /**
   * @returns an inline numeric sentinel for a simple shape, or an inline
   *   list/map modifier sentinel for an untraited collection of a simple member,
   *   or `undefined` if the shape needs a named schema.
   */
  private inlineSimpleOrCollection(shape: AstShape): number | undefined {
    const simple = sentinelForSimpleShape(shape);
    if (simple !== undefined) {
      // Trait-bearing simple shapes need a named SimpleSchema to carry traits.
      return this.index.getTraits(shape) === 0 ? simple : undefined;
    }

    if (this.index.getTraits(shape) !== 0) {
      return undefined;
    }

    if (shape.type === "list" || shape.type === "set") {
      const member = shape.member!;
      if (this.index.getTraits(member) !== 0) {
        return undefined;
      }
      const memberRef = this.simpleRefOf(member.target);
      return memberRef === undefined ? undefined : SCHEMA.LIST_MODIFIER | memberRef;
    }

    if (shape.type === "map") {
      const value = shape.value!;
      if (this.index.getTraits(value) !== 0) {
        return undefined;
      }
      const valueRef = this.simpleRefOf(value.target);
      return valueRef === undefined ? undefined : SCHEMA.MAP_MODIFIER | valueRef;
    }

    return undefined;
  }

  /**
   * @returns the simple sentinel for a target shape id, or `undefined` when the
   *   target is not an untraited simple shape.
   */
  private simpleRefOf(target: string): number | undefined {
    if (target === "smithy.api#Unit") {
      return undefined;
    }
    const shape = this.index.getShape(target);
    if (!shape) {
      return preludeSimpleSentinel(target);
    }
    const simple = sentinelForSimpleShape(shape);
    if (simple === undefined || this.index.getTraits(shape) !== 0) {
      return undefined;
    }
    return simple;
  }

  /**
   * Ensures a named static schema exists for the given shape, building it once.
   */
  private ensureNamed(shapeId: string, shape: AstShape): void {
    const symbol = symbolOf(shapeId);
    if (this.schemas[symbol] || this.visiting.has(symbol)) {
      return;
    }
    this.visiting.add(symbol);

    const { namespace, name } = parseShapeId(shapeId);
    const traits = this.index.getTraits(shape);

    let schema: StaticSchema;
    switch (shape.type) {
      case "structure":
        schema = this.buildStruct(namespace, name, traits, shape, 3);
        break;
      case "union":
        schema = this.buildUnion(namespace, name, traits, shape);
        break;
      case "list":
      case "set":
        schema = [1, namespace, name, traits, this.memberRef(shape.member!)] as StaticListSchema;
        break;
      case "map":
        schema = [
          2,
          namespace,
          name,
          traits,
          this.memberRef(shape.key ?? { target: "smithy.api#String" }),
          this.memberRef(shape.value!),
        ] as StaticMapSchema;
        break;
      default: {
        // Trait-bearing simple shape → SimpleSchema carrying its traits.
        const simple = sentinelForSimpleShape(shape);
        if (simple === undefined) {
          throw new Error(`@smithy/dynamic-client - cannot build schema for ${shapeId} of type ${shape.type}`);
        }
        schema = [0, namespace, name, traits, simple];
      }
    }

    this.schemas[symbol] = schema;
    TypeRegistry.for(namespace).register(shapeId, schema as unknown as Parameters<TypeRegistry["register"]>[1]);
  }

  /**
   * Builds a structure or error schema. Required members are front-loaded and
   * their count recorded as the trailing tuple element.
   */
  private buildStruct(
    namespace: string,
    name: string,
    traits: SchemaTraits,
    shape: AstShape,
    id: 3 | -3
  ): StaticStructureSchema | StaticErrorSchema {
    const members = shape.members ?? {};
    const required: string[] = [];
    const optional: string[] = [];
    for (const memberName in members) {
      if (isRequired(members[memberName])) {
        required.push(memberName);
      } else {
        optional.push(memberName);
      }
    }
    const names = required.concat(optional);
    const refs: $SchemaRef[] = new Array(names.length);
    for (let i = 0; i < names.length; ++i) {
      refs[i] = this.memberRef(members[names[i]]);
    }

    if (id === -3) {
      const error: StaticErrorSchema = [-3, namespace, name, traits, names, refs, required.length];
      return error;
    }
    const struct: StaticStructureSchema = [3, namespace, name, traits, names, refs, required.length];
    return struct;
  }

  /**
   * Builds a union schema. Union members are never required.
   */
  private buildUnion(namespace: string, name: string, traits: SchemaTraits, shape: AstShape): StaticUnionSchema {
    const members = shape.members ?? {};
    const names = Object.keys(members);
    const refs: $SchemaRef[] = new Array(names.length);
    for (let i = 0; i < names.length; ++i) {
      refs[i] = this.memberRef(members[names[i]]);
    }
    return [4, namespace, name, traits, names, refs];
  }

  /**
   * @returns the schema ref for an aggregate member, wrapping it as a
   *   `[ref, memberTraits]` pair only when the member carries its own traits.
   */
  private memberRef(member: AstMember): $SchemaRef {
    const targetRef = this.ref(member.target);
    const memberTraits = this.index.getTraits(member);
    if (memberTraits === 0) {
      return targetRef;
    }
    return [targetRef, memberTraits] as unknown as $SchemaRef;
  }

  /**
   * Builds an operation schema and registers any error shapes it references.
   */
  private buildOperation(operationId: string): void {
    const shape = this.index.getShape(operationId);
    if (!shape || shape.type !== "operation") {
      return;
    }
    const { namespace, name } = parseShapeId(operationId);
    const traits = this.index.getTraits(shape);
    const input = this.opIoRef(shape.input?.target);
    const output = this.opIoRef(shape.output?.target);

    if (shape.errors) {
      for (const errorRef of shape.errors) {
        this.buildError(errorRef.target);
      }
    }

    const operation: StaticOperationSchema = [9, namespace, name, traits, input, output];
    this.operations[symbolOf(operationId)] = operation;
  }

  /**
   * @returns the operation input/output ref, defaulting absent I/O to Unit.
   */
  private opIoRef(target: string | undefined): $SchemaRef {
    if (!target || target === "smithy.api#Unit") {
      return (() => UNIT) as unknown as $SchemaRef;
    }
    return this.ref(target);
  }

  /**
   * Builds and registers an error schema and its constructor association.
   */
  private buildError(shapeId: string): void {
    const symbol = symbolOf(shapeId);
    if (this.schemas[symbol]) {
      return;
    }
    const shape = this.index.getShape(shapeId);
    if (!shape || shape.type !== "structure") {
      return;
    }
    const { namespace, name } = parseShapeId(shapeId);
    const traits = this.index.getTraits(shape);
    const error = this.buildStruct(namespace, name, traits, shape, -3) as StaticErrorSchema;
    this.schemas[symbol] = error;
    this.registerError(namespace, error);
  }

  /**
   * Builds the synthetic, unmodeled base exception for the service namespace.
   */
  private buildBaseException(): StaticErrorSchema {
    const { namespace, name } = parseShapeId(this.index.getServiceId());
    const syntheticNs = SYNTHETIC_PREFIX + namespace;
    const exceptionName = `${name}ServiceException`;
    const baseException: StaticErrorSchema = [-3, syntheticNs, exceptionName, 0, [], []];
    this.schemas[symbolOf(`${syntheticNs}#${exceptionName}`)] = baseException;
    this.registerError(syntheticNs, baseException);
    return baseException;
  }

  /**
   * Registers an error schema in its namespace's registry, tracking the
   * registry for later protocol error resolution.
   */
  private registerError(namespace: string, error: StaticErrorSchema): void {
    const registry = TypeRegistry.for(namespace);
    registry.registerError(error, ServiceException);
    this.errorRegistries.set(namespace, registry);
  }
}

/**
 * @returns the `<Name>$` export symbol for a shape id.
 * @internal
 */
export function symbolOf(shapeId: string): string {
  return parseShapeId(shapeId).name + "$";
}

/**
 * @returns the sentinel for a prelude simple shape by name, or `undefined`.
 * @internal
 */
function preludeSimpleSentinel(shapeId: string): number | undefined {
  const { name } = parseShapeId(shapeId);
  switch (name) {
    case "String":
      return SCHEMA.STRING;
    case "Boolean":
    case "PrimitiveBoolean":
      return SCHEMA.BOOLEAN;
    case "Byte":
    case "PrimitiveByte":
    case "Short":
    case "PrimitiveShort":
    case "Integer":
    case "PrimitiveInteger":
    case "Long":
    case "PrimitiveLong":
    case "Float":
    case "PrimitiveFloat":
    case "Double":
    case "PrimitiveDouble":
      return SCHEMA.NUMERIC;
    case "BigInteger":
      return SCHEMA.BIG_INTEGER;
    case "BigDecimal":
      return SCHEMA.BIG_DECIMAL;
    case "Blob":
      return SCHEMA.BLOB;
    case "Document":
      return SCHEMA.DOCUMENT;
    case "Timestamp":
      return SCHEMA.TIMESTAMP_DEFAULT;
    default:
      return undefined;
  }
}

/**
 * @returns whether an AST member carries the required trait.
 * @internal
 */
function isRequired(member: AstMember): boolean {
  return !!member.traits && "smithy.api#required" in member.traits;
}
