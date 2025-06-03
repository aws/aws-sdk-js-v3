import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import type {
  AnyType,
  CollectionType,
  CustomType,
  DocumentType,
  HashType,
  ListType,
  MapType,
  SetType,
  TupleType,
} from "../../schema";
import { ItemSchemaType } from "../../schema";

export function marshallValue(
  schema: ItemSchemaType,
  value: any,
  options: marshallOptions = {}
): AttributeValue | undefined {
  if (value === undefined && typeof schema.defaultProvider === "function") {
    value = schema.defaultProvider();
  }
  if (value === undefined || value === null) {
    return { NULL: true };
  }
  const handler = typeMarshallers[schema.type];
  if (!handler) {
    throw new Error(`Unsupported schema type: ${schema.type}`);
  }
  return handler(schema, value, options);
}

type MarshallHandler = (schema: ItemSchemaType, value: any, options: marshallOptions) => AttributeValue | undefined;

const typeMarshallers: Record<ItemSchemaType["type"], MarshallHandler> = {
  String: (_schema, value, options) => {
    const str = marshallString(value);
    return str.length === 0 && options.convertEmptyValues ? { NULL: true } : { S: str };
  },

  Number: (_schema, value, options) => {
    if (
      typeof value === "number" &&
      !options.allowImpreciseNumbers &&
      (value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER)
    ) {
      throw new Error(`Number ${value} exceeds MAX_SAFE_INTEGER`);
    }
    return { N: marshallNumber(value) };
  },

  Boolean: (_schema, value) => ({ BOOL: Boolean(value) }),

  Null: () => ({ NULL: true }),

  Date: (_schema, value) => {
    const date = new Date(value);
    return { N: marshallNumber(Math.floor(date.getTime() / 1000)) };
  },

  List: (schema, value, options) => {
    const listSchema = schema as ListType;
    const items = (value as any[]).map((v) => marshallValue(listSchema.memberType, v, options));
    return {
      L: options.removeUndefinedValues
        ? items.filter((v): v is AttributeValue => v !== undefined)
        : (items as AttributeValue[]),
    };
  },

  Map: (schema, value, options) => {
    const mapSchema = schema as MapType;
    if (
      options.convertClassInstanceToMap &&
      typeof value === "object" &&
      value !== null &&
      value.constructor !== Object
    ) {
      value = { ...value };
    }
    const output: Record<string, AttributeValue> = {};
    for (const key of Object.keys(value)) {
      const marshalled = marshallValue(mapSchema.memberType, value[key], options);
      if (marshalled !== undefined || !options.removeUndefinedValues) {
        output[key] = marshalled!;
      }
    }
    return { M: output };
  },

  Document: (schema, value, options) => {
    const documentSchema = schema as DocumentType;
    const M: Record<string, AttributeValue> = {};
    for (const key of Object.keys(documentSchema.members)) {
      const field = documentSchema.members[key];
      const marshalled = marshallValue(field, value[key], options);
      if (marshalled !== undefined || !options.removeUndefinedValues) {
        const attrName = field.attributeName ?? key;
        M[attrName] = marshalled!;
      }
    }
    return { M };
  },

  Custom: (schema, value) => {
    const customSchema = schema as CustomType<any>;
    return customSchema.marshall(value);
  },

  Binary: (_schema, value) => {
    const buffer = marshallBinary(value);
    return buffer.length === 0 ? { NULL: true } : { B: buffer };
  },

  Collection: (schema, value, options) => {
    const collectionSchema = schema as CollectionType;
    const items = (value as any[]).map((item) => marshallValue(collectionSchema, item, options));
    return {
      L: options.removeUndefinedValues
        ? items.filter((v): v is AttributeValue => v !== undefined)
        : (items as AttributeValue[]),
    };
  },

  Hash: (schema, value, options) => {
    const hashSchema = schema as HashType;
    const output: Record<string, AttributeValue> = {};

    for (const key of Object.keys(value)) {
      const marshalled = marshallValue(hashSchema, value[key], options);
      if (marshalled !== undefined || !options.removeUndefinedValues) {
        output[key] = marshalled!;
      }
    }

    return { M: output };
  },

  Set: (schema, value) => {
    const setSchema = schema as SetType;

    switch (setSchema.memberType) {
      case "String": {
        const values = Array.from(value) as { toString(): string }[];
        return marshallSet(values, marshallString, (s) => s.length === 0, "SS");
      }

      case "Number": {
        const values = Array.from(value) as number[];
        return marshallSet(values, marshallNumber, () => false, "NS");
      }

      case "Binary": {
        const values = Array.from(value) as (string | ArrayBuffer | ArrayBufferView)[];
        return marshallSet(values, marshallBinary, (bin) => bin.byteLength === 0, "BS");
      }

      default:
        throw new Error(`Unsupported set member type: ${setSchema.memberType}`);
    }
  },

  Tuple: (schema, value, options) => {
    const tupleSchema = schema as TupleType;
    const L = tupleSchema.members
      .map((member, i) => marshallValue(member, value[i], options))
      .filter((v): v is AttributeValue => v !== undefined);
    return { L };
  },

  Any: (schema, value) => {
    const anySchema = schema as AnyType;
    if (value === undefined || value === null) return { NULL: true };
    if (typeof value === "string") {
      return value === "" && anySchema.convertEmptyValues ? { NULL: true } : { S: value };
    }
    if (typeof value === "number") return { N: marshallNumber(value) };
    if (typeof value === "boolean") return { BOOL: value };
    if (Array.isArray(value)) {
      return {
        L: value.map((v) => marshallValue(schema, v, anySchema)).filter((v): v is AttributeValue => v !== undefined),
      };
    }
    if (typeof value === "object") {
      const M: Record<string, AttributeValue> = {};
      for (const key of Object.keys(value)) {
        const val = marshallValue(schema, value[key], anySchema);
        if (val !== undefined || !anySchema.removeUndefinedValues) {
          M[key] = val!;
        }
      }
      return { M };
    }
    throw new Error("Unsupported value in Any marshaller");
  },
};

const utf8Bytes = (text: string): Uint8Array => new TextEncoder().encode(text);

const marshallBinary = (input: string | ArrayBuffer | ArrayBufferView): Uint8Array => {
  if (ArrayBuffer.isView(input)) {
    return new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
  }
  if (input instanceof ArrayBuffer) {
    return new Uint8Array(input);
  }
  return Uint8Array.from(utf8Bytes(input));
};

const marshallNumber = (input: number): string => input.toString(10);
const marshallString = (input: { toString(): string }): string => input.toString();
const marshallSet = <InputType, MarshalledElementType>(
  value: Iterable<InputType>,
  marshaller: (element: InputType) => MarshalledElementType,
  isEmpty: (member: MarshalledElementType) => boolean,
  setTag: "BS" | "NS" | "SS"
): AttributeValue => {
  const collected: MarshalledElementType[] = [];
  for (const member of value) {
    const marshalled = marshaller(member);
    if (!isEmpty(marshalled)) {
      collected.push(marshalled);
    }
  }
  return collected.length === 0 ? { NULL: true } : ({ [setTag]: collected } as unknown as AttributeValue);
};
