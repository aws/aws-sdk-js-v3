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
import type { ServiceExceptionOptions } from "@smithy/core/client";

import type { ModelIndex } from "../ast/ModelIndex";
import { parseShapeId } from "../ast/ModelIndex";
import type { AstMember, AstShape } from "../ast/types";
import { sentinelForSimpleShape, timestampSentinel } from "./simpleShapes";

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
   * Runtime exception classes to export from the client, mirroring a
   * code-generated client's error class exports.
   */
  errorClasses: Record<string, typeof ServiceException>;
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
 * @internal
 */
export class SchemaBuilder {
  // Internal schema/operation storage is keyed by full shape ID (`ns#Name`),
  // not the unqualified export symbol, so shapes that share an unqualified name
  // across namespaces (e.g. `a#Shared` and `b#Shared`) do not alias. Export
  // symbols are derived from these at the `build()` boundary.
  private readonly schemas: Record<string, StaticSchema> = {};
  private readonly operations: Record<string, StaticOperationSchema> = {};
  private readonly errorRegistries = new Map<string, TypeRegistry>();
  private readonly visiting = new Set<string>();
  // Exception classes to export, keyed by class name (base + one per modeled
  // error), mirroring a code-generated client's error class exports.
  private readonly errorClasses: Record<string, typeof ServiceException> = {};
  // The synthetic `<Service>ServiceException` base class that all modeled error
  // classes extend. Set by buildBaseException before any modeled error is built.
  private baseExceptionClass: typeof ServiceException = ServiceException;

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
      schemas: exportKeyed(this.schemas),
      operations: exportKeyed(this.operations),
      baseException,
      errorClasses: this.errorClasses,
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
    // it lazily (by full shape ID) to support recursion.
    this.ensureNamed(shapeId, shape);
    const schemas = this.schemas;
    return (() => schemas[shapeId]) as $SchemaRef;
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
    if (this.schemas[shapeId] || this.visiting.has(shapeId)) {
      return;
    }
    this.visiting.add(shapeId);

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

    this.schemas[shapeId] = schema;
    TypeRegistry.for(namespace).register(shapeId, schema as unknown as Parameters<TypeRegistry["register"]>[1]);
  }

  /**
   * Builds a structure or error schema.
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
   * Builds a union schema.
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
   * @returns the schema ref for an aggregate member.
   */
  private memberRef(member: AstMember): $SchemaRef {
    const memberTraits = this.index.getTraits(member);
    const timestamp = this.timestampSentinelForMember(member);
    if (timestamp !== undefined) {
      return (memberTraits === 0 ? timestamp : [timestamp, memberTraits]) as unknown as $SchemaRef;
    }
    const targetRef = this.ref(member.target);
    if (memberTraits === 0) {
      return targetRef;
    }
    return [targetRef, memberTraits] as unknown as $SchemaRef;
  }

  /**
   * @returns the timestamp sentinel (4/5/6/7) for a member whose target is a
   *   timestamp, honoring a member-level `timestampFormat` over the target
   *   shape's, or `undefined` when the member does not target a timestamp.
   */
  private timestampSentinelForMember(member: AstMember): number | undefined {
    const isPreludeTimestamp = member.target === "smithy.api#Timestamp";
    const targetShape = isPreludeTimestamp ? undefined : this.index.getShape(member.target);
    if (!isPreludeTimestamp && targetShape?.type !== "timestamp") {
      return undefined;
    }
    // Member-level timestampFormat overrides the target shape's format; the
    // helper reads `smithy.api#timestampFormat` from the traits it is given and
    // defaults to TIMESTAMP_DEFAULT when absent.
    const memberFormat = member.traits?.["smithy.api#timestampFormat"];
    const traits = memberFormat !== undefined ? member.traits : targetShape?.traits;
    return timestampSentinel({ type: "timestamp", traits });
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
    this.operations[operationId] = operation;
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
    if (this.schemas[shapeId]) {
      return;
    }
    const shape = this.index.getShape(shapeId);
    if (!shape || shape.type !== "structure") {
      return;
    }
    const { namespace, name } = parseShapeId(shapeId);
    const traits = this.index.getTraits(shape);
    const error = this.buildStruct(namespace, name, traits, shape, -3) as StaticErrorSchema;
    this.schemas[shapeId] = error;

    // Synthesize a per-error class extending the service base exception,
    // stamping the modeled name and $fault, mirroring a code-generated client's
    // error classes. Register it as the runtime constructor and export it.
    const fault = faultOf(error[3]);
    const errorClass = makeErrorClass(name, fault, this.baseExceptionClass);
    this.errorClasses[name] = errorClass;
    this.registerError(namespace, error, errorClass);
  }

  /**
   * Builds the synthetic, unmodeled base exception for the service namespace.
   */
  private buildBaseException(): StaticErrorSchema {
    const { namespace, name } = parseShapeId(this.index.getServiceId());
    const syntheticNs = SYNTHETIC_PREFIX + namespace;
    const exceptionName = `${name}ServiceException`;
    const baseException: StaticErrorSchema = [-3, syntheticNs, exceptionName, 0, [], []];
    this.schemas[`${syntheticNs}#${exceptionName}`] = baseException;

    // The base class extends the runtime ServiceException; it passes options
    // through unchanged (no name/$fault stamping — that is per-error).
    this.baseExceptionClass = makeBaseExceptionClass(exceptionName);
    this.errorClasses[exceptionName] = this.baseExceptionClass;
    this.registerError(syntheticNs, baseException, this.baseExceptionClass);
    return baseException;
  }

  /**
   * Registers an error schema in its namespace's registry against a runtime
   * exception constructor, tracking the registry for later protocol error
   * resolution.
   */
  private registerError(namespace: string, error: StaticErrorSchema, ctor: typeof ServiceException): void {
    const registry = TypeRegistry.for(namespace);
    registry.registerError(error, ctor);
    this.errorRegistries.set(namespace, registry);
  }
}

/**
 * Extracts the SigV4-style `$fault` (`"client"` / `"server"`) from a schema's
 * runtime traits.
 *
 * @internal
 */
function faultOf(traits: SchemaTraits): "client" | "server" | undefined {
  if (traits && typeof traits === "object" && !Array.isArray(traits)) {
    const fault = (traits as { error?: unknown }).error;
    if (fault === "client" || fault === "server") {
      return fault;
    }
  }
  return undefined;
}

/**
 * Synthesizes the service base exception class, mirroring a code-generated
 * client's `<Service>ServiceException`: it extends `@smithy/core`'s
 * `ServiceException` and passes options through unchanged (it does not stamp a
 * name or `$fault` — those are per-error concerns set by the leaf classes).
 *
 * @internal
 */
function makeBaseExceptionClass(name: string): typeof ServiceException {
  const BaseException = class extends ServiceException {
    public constructor(options: ServiceExceptionOptions) {
      super(options);
      Object.setPrototypeOf(this, BaseException.prototype);
    }
  };
  Object.defineProperty(BaseException, "name", { value: name, configurable: true });
  return BaseException as unknown as typeof ServiceException;
}

/**
 * Synthesizes a modeled error class, mirroring a code-generated client's error
 * classes: the class extends `base` and stamps the modeled `name` and `$fault`
 * into the `ServiceException` options, so a thrown error reports its modeled
 * identity (`error.name === "NoSuchKey"`) rather than the generic base name.
 *
 * @param name - the modeled exception name.
 * @param fault - the `$fault` value, or `undefined` when the model omits it.
 * @param base - the base exception class to extend.
 *
 * @internal
 */
function makeErrorClass(
  name: string,
  fault: "client" | "server" | undefined,
  base: typeof ServiceException
): typeof ServiceException {
  const ErrorClass = class extends base {
    public constructor(options: ServiceExceptionOptions) {
      super({
        ...options,
        name,
        ...(fault ? { $fault: fault } : {}),
      } as ServiceExceptionOptions);
      Object.setPrototypeOf(this, ErrorClass.prototype);
    }
  };
  Object.defineProperty(ErrorClass, "name", { value: name, configurable: true });
  return ErrorClass as unknown as typeof ServiceException;
}

/**
 * Re-keys an internal, full-shape-id-keyed map by export symbol.
 *
 * @internal
 */
export function exportKeyed<T>(byShapeId: Record<string, T>): Record<string, T> {
  const seen = new Set<string>();
  const out: Record<string, T> = {};
  for (const shapeId in byShapeId) {
    if (!Object.prototype.hasOwnProperty.call(byShapeId, shapeId)) continue;
    const { namespace, name } = parseShapeId(shapeId);
    let symbol = name + "$";
    if (seen.has(symbol)) {
      // Rare: another namespace already claimed this unqualified name. Suffix
      // with the namespace (dots → underscores) to deconflict, e.g.
      // `Shared_com_example_b$`.
      symbol = `${name}_${namespace.replace(/\./g, "_")}$`;
    }
    seen.add(symbol);
    out[symbol] = byShapeId[shapeId];
  }
  return out;
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
