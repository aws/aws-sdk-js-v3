import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import type { CustomType, DocumentType, ItemSchemaType, ListType, MapType, SetType, TupleType } from "../../schema";
import { MarshallHandler } from "../types";
import { marshallDocument } from "./marshallDocument";

export function marshallValue<T = unknown>(
  schema: ItemSchemaType,
  value: T,
  options: marshallOptions = {}
): AttributeValue | undefined {
  if (value === undefined && typeof schema.defaultProvider === "function") {
    value = schema.defaultProvider() as T;
  }
  if (isNull(value)) {
    return nullValue();
  }
  const handler = marshallers[schema.type];
  if (!handler) {
    throw new Error(`Unsupported schema type: ${(schema as any).type}`);
  }
  return handler(schema, value, options);
}

const marshallers: Record<ItemSchemaType["type"], MarshallHandler> = {
  String: (_s, v, o) => {
    if (isNull(v)) return nullValue();
    const str = (v as { toString(): string }).toString();
    return str === "" && o.convertEmptyValues ? nullValue() : { S: str };
  },

  Number: (_s, v) => {
    if (isNull(v)) return nullValue();
    const num = v as number;

    if (!Number.isFinite(num) || !Number.isSafeInteger(num)) {
      throw new Error(`Value ${num} exceeds MAX_SAFE_INTEGER or is not a valid number`);
    }

    return { N: num.toString(10) };
  },

  Boolean: (_s, v) => (isNull(v) ? nullValue() : { BOOL: !!v }),

  Null: () => nullValue(),

  Date: (_s, v) => {
    let date: Date;
    if (typeof v === "string") date = new Date(v);
    else if (typeof v === "number") date = new Date(v * 1000);
    else if (v instanceof Date || Object.prototype.toString.call(v) === "[object Date]") date = v as Date;
    else return nullValue();
    return { N: Math.floor(date.getTime() / 1000).toString() };
  },

  Binary: (_s, v) => {
    if (isNull(v)) return nullValue();
    let buffer: Uint8Array;
    if (ArrayBuffer.isView(v)) buffer = new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
    else if (
      typeof ArrayBuffer === "function" &&
      (v instanceof ArrayBuffer || Object.prototype.toString.call(v) === "[object ArrayBuffer]")
    )
      buffer = new Uint8Array(v as ArrayBuffer);
    else if (typeof v === "string") buffer = new TextEncoder().encode(v);
    else return nullValue();
    return buffer.byteLength === 0 ? { NULL: true } : { B: buffer };
  },

  Custom: (s, v) => {
    if (isNull(v)) return nullValue();
    return (s as CustomType<unknown>).marshall(v);
  },

  Document: (s, v, o) => {
    if (v === null || typeof v !== "object") return nullValue();
    return marshallDocument(v, s as DocumentType, o);
  },

  List: (s, v, o) => {
    if (!Array.isArray(v)) return nullValue();
    const member = (s as ListType).memberType;
    const L = v
      .map((item) => marshallValue(member, item, o))
      .filter((val): val is AttributeValue => !o.removeUndefinedValues || val !== undefined);
    return { L };
  },

  Map: (s, v, o) => {
    if (v === null || typeof v !== "object") return nullValue();
    const M: Record<string, AttributeValue> = {};
    const mapSchema = s as MapType;

    // Handle Map instance or custom iterable
    if (v instanceof Map || isIterable(v)) {
      for (const [k, val] of v as Iterable<[string, unknown]>) {
        const marshalled = marshallValue(mapSchema.memberType, val, o);
        if (marshalled !== undefined || !o.removeUndefinedValues) {
          M[k] = marshalled!;
        }
      }
    } else {
      // Handle plain object
      for (const [k, val] of Object.entries(v)) {
        const marshalled = marshallValue(mapSchema.memberType, val, o);
        if (marshalled !== undefined || !o.removeUndefinedValues) {
          M[k] = marshalled!;
        }
      }
    }

    return { M };
  },

  Set: (s, v, o) => {
    const setSchema = s as SetType;
    if (isNull(v)) return nullValue();
    const values = toArray(createSet(v));

    switch (setSchema.memberType) {
      case "String": {
        const members = values
          .map((el) => (el as { toString(): string }).toString())
          .filter((s) => !(o.convertEmptyValues && s === ""));
        return members.length > 0 ? { SS: members } : nullValue();
      }
      case "Number": {
        const members = values.map((n) => (n as number).toString());
        return members.length > 0 ? { NS: members } : nullValue();
      }
      case "Binary": {
        const members = values
          .map((b) => {
            if (typeof b === "string") return new TextEncoder().encode(b);
            if (ArrayBuffer.isView(b)) return new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
            if (b instanceof ArrayBuffer) return new Uint8Array(b);
            return new Uint8Array(0);
          })
          .filter((b) => !(o.convertEmptyValues && b.byteLength === 0));
        return members.length > 0 ? { BS: members } : nullValue();
      }
      default:
        return nullValue();
    }
  },

  Tuple: (s, v, o) => {
    const tupleSchema = s as TupleType;
    const values = tupleSchema.members.map((memberSchema, i) => {
      const val = Array.isArray(v) ? v[i] : undefined;
      const marshalled = marshallValue(memberSchema, val, o);
      return marshalled ?? nullValue();
    });
    return { L: values };
  },

  Collection: (s, v, o) => {
    if (!Array.isArray(v)) return nullValue();
    const items = v.map((item) => marshallValue(s, item, o));
    const L = o.removeUndefinedValues ? items.filter((x): x is AttributeValue => x !== undefined) : items;
    return wrapAsList(L, o);
  },

  Hash: (s, v, o) => {
    if (v === null || typeof v !== "object") return nullValue();
    const entries = Object.entries(v);
    const M: Record<string, AttributeValue> = {};
    for (const [key, value] of entries) {
      const marshalled = marshallValue(s, value, o);
      if (marshalled !== undefined || !o.removeUndefinedValues) M[key] = marshalled!;
    }
    return Object.keys(M).length === 0 && o.convertEmptyValues ? nullValue() : { M };
  },

  Any: (s, v, o) => {
    if (isNull(v)) return nullValue();
    if (typeof v === "string") return v === "" && o.convertEmptyValues ? nullValue() : { S: v };
    if (typeof v === "number") return { N: v.toString() };
    if (typeof v === "boolean") return { BOOL: v };
    if (Array.isArray(v)) {
      const L = v.map((i) => marshallValue(s, i, o)).filter((x): x is AttributeValue => x !== undefined);
      return { L };
    }
    if (typeof v === "object") {
      const M = Object.fromEntries(
        Object.entries(v)
          .map(([k, val]) => [k, marshallValue(s, val, o)])
          .filter((entry): entry is [string, AttributeValue] => entry[1] !== undefined)
      );
      return { M };
    }
    return nullValue();
  },
};

const createSet = (input: unknown): Set<unknown> => {
  if (input instanceof Set) return input;
  if (Array.isArray(input)) return new Set(input);
  return new Set([input]);
};

const toArray = (input: Iterable<unknown>): unknown[] => (Array.isArray(input) ? input : Array.from(input));

const wrapAsList = (L: (AttributeValue | undefined)[], options: marshallOptions): AttributeValue =>
  L.length === 0 && options.convertEmptyValues ? nullValue() : ({ L } as AttributeValue);

const nullValue = (): AttributeValue => ({ NULL: true });
const isNull = (v: unknown): v is null | undefined => v === null || v === undefined;
const isIterable = (obj: unknown): obj is Iterable<[string, unknown]> =>
  typeof obj === "object" && obj !== null && typeof (obj as Iterable<unknown>)[Symbol.iterator] === "function";
