import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { unmarshallOptions } from "@aws-sdk/util-dynamodb/dist-types";

import type { ItemSchema } from "../../schema";
import type { MutableRecord } from "../types";
import { unmarshallValue } from "./unmarshallValue";

/**
 * Unmarshalls a DynamoDB item into a plain JavaScript object
 * using the provided schema. This is the symmetric inverse of `marshallItem`.
 *
 * @param schema - The schema describing how to interpret each field in the item
 * @param input - The raw DynamoDB item (AttributeValue map)
 * @param options - Optional unmarshall behavior (wrapNumbers, etc).
 * @returns A plain JS object with decoded values.
 *
 */
export function unmarshallItem<T extends object = MutableRecord>(
  schema: ItemSchema,
  input: Record<string, AttributeValue>,
  options?: unmarshallOptions
): T {
  const result: MutableRecord = {};

  for (const [propName, definition] of Object.entries(schema)) {
    const attrName = definition.attributeName ?? propName;
    const attr = input[attrName];

    if (attr !== undefined) {
      result[propName] = unmarshallValue(definition, attr, options);
    } else if (typeof definition.defaultProvider === "function") {
      result[propName] = definition.defaultProvider();
    }
  }

  return result as T;
}
