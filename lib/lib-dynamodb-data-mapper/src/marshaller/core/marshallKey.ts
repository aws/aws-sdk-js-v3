import { AttributeValue } from "@aws-sdk/client-dynamodb";
import type { marshallOptions } from "@aws-sdk/util-dynamodb";

import type { ItemSchema } from "../../schema";
import { isKey } from "../../schema/";
import { marshallValue } from "../core";

export type AttributeMap = { [key: string]: AttributeValue };

/**
 * Extracts and marshals only the key fields from an input object,
 * based on the schema and optional index name.
 */
export function marshallKey(
  schema: ItemSchema,
  input: { [key: string]: any },
  indexName?: string,
  options: marshallOptions = {}
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
