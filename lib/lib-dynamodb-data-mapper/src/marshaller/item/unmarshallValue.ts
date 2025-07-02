import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { unmarshallOptions } from "@aws-sdk/util-dynamodb";

import type { CustomType, DocumentType, ItemSchemaType, ListType, MapType, TupleType } from "../../schema";
import { AttributeValueMap, UnmarshallHandler } from "../types";
import { unmarshallDocument } from "./unmarshallDocument";

export function unmarshallValue<T = unknown>(
  schema: ItemSchemaType,
  value: AttributeValue,
  options: unmarshallOptions = {}
): T | undefined {
  if (value === undefined) return undefined;
  const handler = unmarshallers[schema.type];
  if (!handler) {
    throw new Error(`Unsupported schema type: ${schema.type}`);
  }
  return handler(schema, value, options) as T;
}

const unmarshallers: Record<ItemSchemaType["type"], UnmarshallHandler> = {
  String: (_s, v) => (isNull(v) ? "" : (v as { S: string }).S),

  Number: (_s, v, o) => getNumber((v as { N?: string }).N, o),

  Boolean: (_s, v) => (v as { BOOL: boolean }).BOOL,

  Null: (_s, v) => ((v as { NULL?: boolean }).NULL ? null : undefined),

  Date: (_s, v) => {
    const n = (v as { N?: string }).N;
    return n ? new Date(Number(n) * 1000) : undefined;
  },

  Binary: (_s, v) => ((v as { NULL?: boolean; B?: Uint8Array }).NULL ? new Uint8Array(0) : (v as { B: Uint8Array }).B),

  Custom: (s, v) => (s as CustomType<unknown>).unmarshall(v),

  Document: (s, v) => unmarshallDocument((v as { M?: AttributeValueMap }).M, s as DocumentType),

  List: (s, v, o) => getList((v as { L?: AttributeValue[] }).L, (s as ListType).memberType, o),

  Map: (s, v, o) => getMap((v as { M: Record<string, AttributeValue> }).M, (s as MapType).memberType, o),

  Set: (s, v, o) => {
    if ("NULL" in v && (v as { NULL: boolean }).NULL) return new Set();
    const setSchema = s as { memberType: string };
    switch (setSchema.memberType) {
      case "String":
        return new Set((v as { SS?: string[] }).SS ?? []);
      case "Number":
        return new Set(((v as { NS?: string[] }).NS ?? []).map((n) => getNumber(n, o)));
      case "Binary":
        return new Set((v as { BS?: Uint8Array[] }).BS ?? []);
      default:
        return undefined;
    }
  },

  Tuple: (s, v, o) => {
    const list = (v as { L?: AttributeValue[] }).L;
    return Array.isArray(list) ? (s as TupleType).members.map((m, i) => unmarshallValue(m, list[i], o)) : undefined;
  },

  Collection: (s, v, o) => getList((v as { L?: AttributeValue[] }).L, s, o),

  Hash: (s, v, o) => getMap((v as { M?: Record<string, AttributeValue> }).M, s, o),

  Any: (s, v, o) => {
    if (isNull(v)) return null;
    if ("S" in v) return v.S;
    if ("N" in v) return getNumber(v.N, o);
    if ("BOOL" in v) return v.BOOL;
    if ("L" in v) return getList(v.L, s, o);
    if ("M" in v) return getMap(v.M, s, o);
    return undefined;
  },
};

const isNull = (value: AttributeValue): boolean =>
  typeof value === "object" && value !== null && "NULL" in value && value.NULL === true;

const getNumber = (n: string | undefined, o: unmarshallOptions) => {
  if (typeof n !== "string") return undefined;
  if (typeof o.wrapNumbers === "function") return o.wrapNumbers(n);
  if (o.wrapNumbers === true) return { value: n };
  return Number(n);
};

const getList = (list: AttributeValue[] | undefined, s: ItemSchemaType, o: unmarshallOptions) =>
  list?.map((i) => unmarshallValue(s, i, o));

const getMap = (map: Record<string, AttributeValue> | undefined, s: ItemSchemaType, o: unmarshallOptions) =>
  map ? Object.fromEntries(Object.entries(map).map(([k, val]) => [k, unmarshallValue(s, val, o)])) : undefined;
