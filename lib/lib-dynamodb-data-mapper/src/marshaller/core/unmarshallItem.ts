import type { AttributeValue } from '@aws-sdk/client-dynamodb';

import type { Schema } from '../../schema/Schema';
import type { ZeroArgumentsConstructor } from '../../schema/SchemaType';
import { unmarshallValue } from './unmarshallValue';

export function unmarshallItem<T = Record<string, any>>(
  schema: Schema,
  input: Record<string, AttributeValue>,
  valueConstructor?: ZeroArgumentsConstructor<T>
): T {
  const target: T = valueConstructor ? new valueConstructor() : Object.create(null);

  for (const key of Object.keys(schema)) {
    const { attributeName = key } = schema[key];
    if (attributeName in input) {
      (target as any)[key] = unmarshallValue(schema[key], input[attributeName]);
    }
  }

  return target;
}