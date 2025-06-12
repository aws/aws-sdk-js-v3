import "reflect-metadata";

import { ItemSchema, ItemSchemaType, KeyableType } from "../item";
import { DynamoDbSchema } from "../symbols";
import { METADATA_TYPE_KEY } from "./constants";

/**
 * Declare a property in a TypeScript class to be part of a DynamoDB schema.
 * Meant to be used as a property decorator in conjunction with TypeScript's
 * emitted type metadata. If used in a project compiled with the
 * `emitDecoratorMetadata` option enabled, the type will infer most types from
 * the TypeScript source.
 *
 * Please note that TypeScript does not emit any metadata about the type
 * parameters supplied to generic types, so `Array<string>`, `[number, string]`,
 * and `MyClass[]` are all exposed as `Array` via the emitted metadata. Without
 * additional metadata, this annotation will treat all encountered arrays as
 * collections of untyped data. You may supply either a `members` declaration or
 * a `memberType` declaration to direct this annotation to treat a property as a
 * tuple or typed list, respectively.
 *
 * Member type declarations are required for maps and sets. Binary types such as
 * `Uint8Array` and `ArrayBuffer` must be explicitly marked as `{ type: 'Binary' }`
 * unless type inference support is enabled for them.
 *
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html
 * @see https://www.typescriptlang.org/docs/handbook/compiler-options.html
 * @see https://github.com/Microsoft/TypeScript/issues/2577
 *
 * @example
 *  export class MyClass {
 *      @attribute()
 *      id: string;
 *
 *      @attribute()
 *      subdocument?: MyOtherClass;
 *
 *      @attribute()
 *      untypedCollection?: Array<any>;
 *
 *      @attribute({ type: 'Set', memberType: 'String' })
 *      listOfStrings?: Set<string>;
 *
 *      @attribute({ type: 'Tuple', members: [{ type: 'Boolean' }, { type: 'String' }] })
 *      tuple?: [boolean, string];
 *
 *      @attribute({ type: 'Map', memberType: 'String' })
 *      mapStringString?: Map<string, string>;
 *
 *      @attribute({ type: 'Binary' })
 *      binary?: Uint8Array;
 *  }
 */
export function attribute(): PropertyDecorator;
export function attribute(params: Partial<ItemSchemaType>): PropertyDecorator;
export function attribute(params: Partial<ItemSchemaType> = {}): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    const reflectedType = Reflect.getMetadata(METADATA_TYPE_KEY, target, propertyKey);
    console.log(`[attribute] '${String(propertyKey)}' => reflectedType:`, reflectedType?.name ?? "undefined");
    const schemaType = metadataToItemSchemaType(reflectedType, params);

    validateSchemaDefinition(schemaType, propertyKey);
    enforceKeyConstraints(schemaType);
    enforceKeyTypeCompatibility(schemaType, propertyKey);
    initializeSchemaContainer(target);

    target[DynamoDbSchema][propertyKey] = schemaType;
  };
}

/**
 * Initializes the DynamoDbSchema container on the target object if it doesn't already exist.
 *
 * This lazily merges inherited schema definitions from the prototype chain
 * using `deriveBaseSchema`, and stores them on the current target (usually a prototype).
 *
 * This follows the behavior of the AWS SDK v2 DataMapper.
 *
 * @param target - The prototype object (e.g., class.prototype) to define the schema container on.
 */
export function initializeSchemaContainer(target: ItemSchema): void {
  if (!Object.prototype.hasOwnProperty.call(target, DynamoDbSchema)) {
    Object.defineProperty(target, DynamoDbSchema, {
      value: deriveBaseSchema(target),
      enumerable: false,
      writable: false,
    });
  }
}

/**
 * Infers the `ItemSchemaType` of a class property using either explicit schema overrides
 * or TypeScript's emitted design-time type metadata.
 *
 * This function is typically used inside a decorator to determine the schema shape
 * of a field based on its constructor (e.g., `String`, `Map`, `Array`, etc.) or
 * an explicitly provided `type`, `memberType`, or `members` value.
 *
 * @param ctor - A zero-argument constructor representing the reflected field type,
 *               or `undefined` if metadata is missing. Used to infer a base type if `type` is not provided.
 * @param declaration - Partial schema overrides explicitly declared via `@attribute(...)`.
 * @returns A complete `ItemSchemaType` describing the field shape.
 */
function metadataToItemSchemaType(
  ctor: { new (): unknown } | undefined,
  declaration: Partial<ItemSchemaType>
): ItemSchemaType {
  const { type: declaredType, ...rest } = declaration;

  if (declaredType) {
    return { ...rest, type: declaredType } as ItemSchemaType;
  }

  if (!ctor) {
    return { ...rest, type: "Any" } as ItemSchemaType;
  }

  const type = (() => {
    if (ctor === String) return "String";
    if (ctor === Number) return "Number";
    if (ctor === Boolean) return "Boolean";
    if (ctor === Date || ctor.prototype instanceof Date) return "Date";
    if (ctor === Set || ctor.prototype instanceof Set) return "Set";
    if (ctor === Map || ctor.prototype instanceof Map) return "Map";
    if (ctor === Array || ctor.prototype instanceof Array) {
      if ("members" in declaration) return "Tuple";
      if ("memberType" in declaration) return "List";
      return "Collection";
    }

    if (ctor.prototype?.[DynamoDbSchema]) {
      return {
        ...rest,
        type: "Document",
        members: ctor.prototype[DynamoDbSchema],
        valueConstructor: ctor,
      };
    }

    if (isBinaryType(ctor)) return "Binary";
    return "Any";
  })();

  if (typeof type === "object") {
    return type as ItemSchemaType;
  }
  return { ...rest, type } as ItemSchemaType;
}

/**
 * Recursively collects and merges schema definitions from a class and its prototypes.
 *
 * This enables inheritance of `@attribute`-decorated fields across class hierarchies,
 * supporting use cases where schema is defined in parent classes and extended in children.
 *
 * @param target - The class prototype or instance to inspect.
 * @returns A merged schema object including all inherited attributes.
 */
function deriveBaseSchema(target: unknown): ItemSchema {
  if (target && typeof target === "object") {
    const prototype = Object.getPrototypeOf(target);
    if (prototype) {
      return {
        ...deriveBaseSchema(prototype),
        ...(Object.prototype.hasOwnProperty.call(prototype, DynamoDbSchema) ? prototype[DynamoDbSchema] : {}),
      };
    }
  }

  return {};
}

/**
 * Ensures that composite schema types define the appropriate shape metadata.
 *
 * - `Set`, `Map`, `List` require a `memberType` field
 * - `Tuple`, `Document` require a `members` field
 *
 * @param schema - The inferred or declared schema definition
 * @param key - The property name being decorated (used for error messaging)
 * @throws {Error} If required shape metadata is missing
 */
function validateSchemaDefinition(schema: ItemSchemaType, key: string | symbol) {
  const type = (schema as { type?: string }).type;
  switch (schema.type) {
    case "Set":
    case "Map":
    case "List":
      if (!("memberType" in schema)) {
        throw new Error(`@attribute '${String(key)}': '${type}' requires 'memberType'.`);
      }
      break;
    case "Tuple":
    case "Document":
      if (!("members" in schema)) {
        throw new Error(`@attribute '${String(key)}': '${type}' requires 'members'.`);
      }
      break;
  }
}

/**
 * Ensures only valid primitive types are used as partition or sort keys.
 *
 * In DynamoDB, only scalar types like `String`, `Number`, `Binary`, `Boolean`, `Date`, and
 * custom-mapped types are allowed as keys. This function enforces that any schema node
 * marked with `keyType` or `indexKeyConfigurations` adheres to this constraint.
 *
 * @param schema - The schema definition to validate
 * @throws {Error} If the schema is marked as a key and uses an invalid type
 */
function enforceKeyConstraints(schema: ItemSchemaType): void {
  const keyableTypes: ItemSchemaType["type"][] = ["String", "Number", "Binary", "Date", "Custom"];

  if (("keyType" in schema || "indexKeyConfigurations" in schema) && !keyableTypes.includes(schema.type)) {
    throw new Error(`@attribute: Properties of type '${schema.type}' may not be used as table or index keys.`);
  }
}

/**
 * Ensures that a schema field used as a table or index key has a valid, supported type.
 *
 * DynamoDB keys must be one of the following scalar types: `String`, `Number`, `Binary`, `Date`, or `Custom`.
 * This function enforces that restriction for any field that declares a `keyType` or `indexKeyConfigurations`.
 *
 * If the field's type is not one of the allowed types, an error is thrown.
 * This includes cases where the type could not be inferred and defaults to `'Any'`.
 *
 * @param schemaType - The schema definition object for the field being validated.
 * @param propertyKey - The name of the field being decorated.
 *
 * @throws Will throw an error if the field is used as a key but has an unsupported type.
 */
export function enforceKeyTypeCompatibility(schemaType: ItemSchemaType, propertyKey: string | symbol): void {
  const isKey =
    (schemaType as KeyableType).keyType != null || (schemaType as KeyableType).indexKeyConfigurations != null;

  const allowedKeyTypes = ["Binary", "Custom", "Date", "Number", "String"];

  if (isKey && allowedKeyTypes.indexOf(schemaType.type) < 0) {
    const hint =
      schemaType.type === "Any"
        ? ` It looks like the type couldn't be inferred. Did you forget to enable 'emitDecoratorMetadata' in tsconfig.json?`
        : "";

    throw new Error(
      `Invalid type '${schemaType.type}' used for key field '${String(
        propertyKey
      )}'. Keys must be one of: ${allowedKeyTypes.join(", ")}.${hint}`
    );
  }
}

/**
 * ArrayBuffer.isView will only evaluate if an object instance is an
 * ArrayBufferView, but TypeScript metadata gives us a reference to the class.
 *
 * This function checks if the provided constructor is or extends the built-in
 * `ArrayBuffer` constructor, the `DataView` constructor, or any `TypedArray`
 * constructor.
 *
 * This function will need to be modified if new binary types are added to
 * JavaScript (e.g., the `Int64Array` or `Uint64Array` discussed in
 * {@link https://github.com/tc39/proposal-bigint the BigInt TC39 proposal}.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView
 */
function isBinaryType(ctor: any): boolean {
  return (
    ctor === Uint8Array ||
    ctor.prototype instanceof Uint8Array ||
    ctor === Uint8ClampedArray ||
    ctor.prototype instanceof Uint8ClampedArray ||
    ctor === Uint16Array ||
    ctor.prototype instanceof Uint16Array ||
    ctor === Uint32Array ||
    ctor.prototype instanceof Uint32Array ||
    ctor === Int8Array ||
    ctor.prototype instanceof Int8Array ||
    ctor === Int16Array ||
    ctor.prototype instanceof Int16Array ||
    ctor === Int32Array ||
    ctor.prototype instanceof Int32Array ||
    ctor === Float32Array ||
    ctor.prototype instanceof Float32Array ||
    ctor === Float64Array ||
    ctor.prototype instanceof Float64Array ||
    ctor === ArrayBuffer ||
    ctor.prototype instanceof ArrayBuffer ||
    ctor === DataView ||
    ctor.prototype instanceof DataView
  );
}

/**
 * Enforced types for schema parameters requiring memberType or members.
 */
type SetSchema = Extract<ItemSchemaType, { type: "Set" }>;
type MapSchema = Extract<ItemSchemaType, { type: "Map" }>;
type ListSchema = Extract<ItemSchemaType, { type: "List" }>;
type TupleSchema = Extract<ItemSchemaType, { type: "Tuple" }>;
type DocumentSchema = Extract<ItemSchemaType, { type: "Document" }>;

type ValidExplicitSchema =
  | Extract<ItemSchemaType, { type: "String" | "Number" | "Boolean" | "Date" | "Binary" | "Any" | "Null" | "Custom" }>
  | (SetSchema & Required<Pick<SetSchema, "memberType">>)
  | (MapSchema & Required<Pick<MapSchema, "memberType">>)
  | (ListSchema & Required<Pick<ListSchema, "memberType">>)
  | (TupleSchema & Required<Pick<TupleSchema, "members">>)
  | (DocumentSchema & Required<Pick<DocumentSchema, "members">>);
