import type { AttributeValue } from '@aws-sdk/client-dynamodb';
import { marshallOptions } from '@aws-sdk/util-dynamodb';

import { Schema } from '../../schema/Schema';
import { marshallValue } from './marshallValue';

export function marshallItem(
  schema: Schema,
  input: Record<string, any>,
  options: marshallOptions = {}
): Record<string, AttributeValue> {
  const output: Record<string, AttributeValue> = {};

  for (const key of Object.keys(schema)) {
    const field = schema[key];
    const attrName = field.attributeName ?? key;
    const value = input[key];
    if (value === undefined) {
      continue;
    }
    const marshalled = marshallValue(field, value, options);
    if (marshalled !== undefined) {
      output[attrName] = marshalled;
    }
  }

  return output;
}