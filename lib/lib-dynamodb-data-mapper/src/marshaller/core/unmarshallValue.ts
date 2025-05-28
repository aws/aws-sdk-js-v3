import type { AttributeValue } from '@aws-sdk/client-dynamodb';

import type {
  CollectionType,
  CustomType,
  DocumentType,
  HashType,
  ListType,
  MapType,
  SchemaType,
  SetType,
  TupleType} from '../../schema';

function unmarshallTuple(schema: TupleType, input: AttributeValue[]): any[] {
  return schema.members.map((member, i) => unmarshallValue(member, input[i]));
}

function unmarshallStringSet(input: string[]): Set<string> {
  return new Set(input);
}

function unmarshallNumberSet(input: string[]): Set<number> {
  return new Set(input.map(Number));
}

const typeUnmarshallers: Record<SchemaType['type'], UnmarshallHandler> = {
  String: (_schema, value) => (value as any).NULL ? '' : (value as any).S,

  Number: (_schema, value) => typeof (value as any).N === 'string' ? Number((value as any).N) : undefined,

  Boolean: (_schema, value) => (value as any).BOOL,

  Date: (_schema, value) => {
    const raw = (value as any).N;
    return raw ? new Date(Number(raw) * 1000) : undefined;
  },

  Null: (schema, value) => (value as any).NULL ? null : undefined,

  List: (schema, value) => {
    const listSchema = schema as ListType;
    return (value as any).L?.map((item: AttributeValue) =>
      unmarshallValue(listSchema.memberType, item)
    );
  },

  Map: (schema, value) => {
    const mapSchema = schema as MapType;
    const rawMap = (value as any).M;
    if (!rawMap) return undefined;
    const result: Record<string, any> = {};
    for (const key of Object.keys(rawMap)) {
      result[key] = unmarshallValue(mapSchema.memberType, rawMap[key]);
    }
    return result;
  },

  Document: (schema, value) => {
    const docSchema = schema as DocumentType;
    const rawMap = (value as any).M;
    if (!rawMap) return undefined;
    const instance = docSchema.valueConstructor
      ? new docSchema.valueConstructor()
      : Object.create(null);

    for (const key of Object.keys(docSchema.members)) {
      const fieldSchema = docSchema.members[key];
      const attrName = fieldSchema.attributeName ?? key;
      const rawAttr = rawMap[attrName];
      if (rawAttr !== undefined) {
        instance[key] = unmarshallValue(fieldSchema, rawAttr);
      }
    }

    return instance;
  },

  Custom: (schema, value) => {
    const customSchema = schema as CustomType<any>;
    return customSchema.unmarshall(value);
  },

  Binary: (_schema, value) => (value as any).NULL ? new Uint8Array(0) : (value as any).B,

  Collection: (schema, value) => {
    const anySchema = schema as CollectionType;
    return (value as any).L?.map((v: AttributeValue) =>
      unmarshallValue(anySchema, v)
    );
  },

  Hash: (schema, value) => {
    const rawMap = (value as any).M;
    if (!rawMap) return undefined;
    const anySchema = schema as HashType;
    const result: Record<string, any> = {};
    for (const key of Object.keys(rawMap)) {
      result[key] = unmarshallValue(anySchema, rawMap[key]);
    }
    return result;
  },

  Set: (schema, value) => {
    const setSchema = schema as SetType;
    if ((value as any).NULL) {
      switch (setSchema.memberType) {
        case 'Binary': return new Set<Uint8Array>();
        case 'Number': return new Set<number>();
        case 'String': return new Set<string>();
      }
    }
    switch (setSchema.memberType) {
      case 'Binary': return new Set((value as any).BS);
      case 'Number': return unmarshallNumberSet((value as any).NS);
      case 'String': return unmarshallStringSet((value as any).SS);
      default:
        throw new Error(`Unrecognized set member type: ${setSchema.memberType}`);
    }
  },

  Tuple: (schema, value) => unmarshallTuple(schema as TupleType, (value as any).L),

  Any: (schema, value) => {
    const raw = (value as any);
    if (raw.NULL) return null;
    if (raw.S !== undefined) return raw.S;
    if (raw.N !== undefined) return Number(raw.N);
    if (raw.BOOL !== undefined) return raw.BOOL;
    if (raw.L !== undefined) return raw.L.map((v: AttributeValue) => unmarshallValue(schema, v));
    if (raw.M !== undefined) {
      const result: Record<string, any> = {};
      for (const key of Object.keys(raw.M)) {
        result[key] = unmarshallValue(schema, raw.M[key]);
      }
      return result;
    }
    throw new Error('Unsupported value in Any unmarshall');
  },
};

type UnmarshallHandler = (
  schema: SchemaType,
  value: AttributeValue
) => any;

export function unmarshallValue(
  schema: SchemaType,
  value: AttributeValue
): any {
  const handler = typeUnmarshallers[schema.type];
  if (!handler) {
    throw new Error(`Unsupported schema type for unmarshalling: ${schema.type}`);
  }
  return handler(schema, value);
}