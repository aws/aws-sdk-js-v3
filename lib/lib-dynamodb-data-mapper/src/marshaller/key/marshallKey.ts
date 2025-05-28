import { AttributeValue } from '@aws-sdk/client-dynamodb';
import type { marshallOptions } from '@aws-sdk/util-dynamodb';

import type { Schema } from '../../schema';
import { marshallValue } from '../core';
import { isKey } from './isKey';

export type AttributeMap = {[key: string]: AttributeValue};

/**
 * Extracts and marshals only the key fields from an input object,
 * based on the schema and optional index name.
 */
export function marshallKey(
  schema: Schema,
  input: { [key: string]: any },
  indexName?: string,
  options: marshallOptions = {},
): AttributeMap {
  const marshalled: AttributeMap = {};

  for (const propertyKey of Object.keys(schema)) {
    const fieldSchema = schema[propertyKey];
    if (isKey(fieldSchema, indexName)) {
      const attributeName = fieldSchema.attributeName ?? propertyKey;
      const value = marshallValue(fieldSchema, input[propertyKey], options);
      if (value !== undefined) {
        marshalled[attributeName] = value;
      }
    }
  }

  return marshalled;
}