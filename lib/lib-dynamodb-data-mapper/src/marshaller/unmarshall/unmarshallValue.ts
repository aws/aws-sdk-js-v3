import type { AttributeValue } from "@aws-sdk/client-dynamodb";

import type { AttributeValueMap } from "../../internal/AttributeValueMap";
import type {
  CollectionType,
  CustomType,
  DocumentType,
  HashType,
  ItemSchemaType,
  ListType,
  MapType,
  SetType,
  TupleType,
} from "../../schema";
import { unmarshallDocument } from "./unmarshallDocument";

const typeUnmarshallers: Record<ItemSchemaType["type"], UnmarshallHandler> = {
  String: (_schema, value) => {
    if (isNullValue(value)) return "";
    return (value as { S: string }).S;
  },

  Number: (_schema, value) => {
    const n = (value as { N?: string }).N;
    return typeof n === "string" ? Number(n) : undefined;
  },

  Boolean: (_schema, value) => (value as { BOOL: boolean }).BOOL,

  Date: (_schema, value) => {
    const n = (value as { N?: string }).N;
    return n ? new Date(Number(n) * 1000) : undefined;
  },

  Null: (_schema, value) => (isNullValue(value) ? null : undefined),

  List: (schema, value) => {
    const listSchema = schema as ListType;
    const list = (value as { L: AttributeValue[] }).L;
    return list?.map((item) => unmarshallValue(listSchema.memberType, item));
  },

  Map: (schema, value) => {
    const raw = (value as { M?: AttributeValueMap }).M;
    return unmarshallMap(raw, () => (schema as MapType).memberType);
  },

  Document: (schema, value) => {
    const raw = (value as { M?: AttributeValueMap }).M;
    return unmarshallDocument(raw, schema as DocumentType);
  },

  Custom: (schema, value) => {
    const customSchema = schema as CustomType<any>;
    return customSchema.unmarshall(value);
  },

  Binary: (_schema, value) => {
    if (isNullValue(value)) return new Uint8Array(0);
    return (value as { B: Uint8Array }).B;
  },

  Collection: (schema, value) => {
    const list = (value as { L: AttributeValue[] }).L;
    const collectionSchema = schema as CollectionType;
    return list?.map((v) => unmarshallValue(collectionSchema, v));
  },

  Hash: (schema, value) => {
    const raw = (value as { M?: AttributeValueMap }).M;
    return unmarshallMap(raw, () => schema as HashType);
  },

  Set: (schema, value) => {
    const setSchema = schema as SetType;
    if (isNullValue(value)) {
      switch (setSchema.memberType) {
        case "Binary":
          return new Set<Uint8Array>();
        case "Number":
          return new Set<number>();
        case "String":
          return new Set<string>();
      }
    }
    switch (setSchema.memberType) {
      case "Binary":
        return new Set((value as { BS: Uint8Array[] }).BS);
      case "Number":
        return unmarshallNumberSet((value as { NS: string[] }).NS);
      case "String":
        return unmarshallStringSet((value as { SS: string[] }).SS);
      default:
        throw new Error(`Unrecognized set member type: ${setSchema.memberType}`);
    }
  },

  Tuple: (schema, value) => {
    return unmarshallTuple(schema as TupleType, (value as { L: AttributeValue[] }).L);
  },

  Any: (schema, value) => {
    if (isNullValue(value)) return null;
    if ((value as { S?: string }).S !== undefined) return (value as { S: string }).S;
    if ((value as { N?: string }).N !== undefined) return Number((value as { N: string }).N);
    if ((value as { BOOL?: boolean }).BOOL !== undefined) return (value as { BOOL: boolean }).BOOL;
    if ((value as { L?: AttributeValue[] }).L !== undefined) {
      const list = (value as { L: AttributeValue[] }).L;
      return list.map((v) => unmarshallValue(schema, v));
    }
    if ((value as { M?: AttributeValueMap }).M !== undefined) {
      const map = (value as { M: AttributeValueMap }).M;
      return unmarshallMap(map, () => schema);
    }
    throw new Error("Unsupported value in Any unmarshall");
  },
};

export function unmarshallValue(schema: ItemSchemaType, value: AttributeValue): any {
  if (value === undefined) {
    return undefined;
  }
  const handler = typeUnmarshallers[schema.type];
  if (!handler) {
    throw new Error(`Unsupported schema type for unmarshalling: ${schema.type}`);
  }
  return handler(schema, value);
}

type UnmarshallHandler = (schema: ItemSchemaType, value: AttributeValue) => any;

const unmarshallTuple = (schema: TupleType, input: AttributeValue[]): any[] => {
  return schema.members.map((member, i) => unmarshallValue(member, input[i]));
};

const unmarshallStringSet = (input: string[]): Set<string> => {
  return new Set(input);
};

const unmarshallNumberSet = (input: string[]): Set<number> => {
  return new Set(input.map(Number));
};

const unmarshallMap = (
  rawMap: AttributeValueMap | undefined,
  getSchema: (key: string) => ItemSchemaType,
  targetFactory: () => any = () => Object.create(null)
): Record<string, any> | undefined => {
  if (!rawMap) return undefined;

  const target = targetFactory();

  for (const key of Object.keys(rawMap)) {
    const schema = getSchema(key);
    const attr = rawMap[key];
    if (attr !== undefined) {
      const attrName = schema.attributeName ?? key;
      target[attrName] = unmarshallValue(schema, attr);
    }
  }

  return target;
};

/**
 * Returns true if the given AttributeValue represents a DynamoDB NULL value.
 */
const isNullValue = (value: AttributeValue): boolean => {
  return typeof value === "object" && value !== null && "NULL" in value && value.NULL === true;
};
