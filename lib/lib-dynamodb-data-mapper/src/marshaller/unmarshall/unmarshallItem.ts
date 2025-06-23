import type { AttributeValue } from "@aws-sdk/client-dynamodb";

import type { ItemSchemaType, ZeroArgumentsConstructor } from "../../schema";
import type { ItemSchema } from "../../schema";
import type { MutableRecord } from "../types";
import { unmarshallValue } from "./unmarshallValue";

/**
 * Unmarshalls a DynamoDB item into a fully typed object based on the provided schema.
 *
 * This function reconstructs a JavaScript object from a raw DynamoDB item
 * (`Record<string, AttributeValue>`), using a schema that defines how each field
 * should be interpreted.
 *
 * If a `valueConstructor` is provided, the resulting object will be hydrated into an
 * instance of that class. Otherwise, a plain object will be returned.
 *
 * Embedded documents (`type: 'Document'`) are recursively unmarshalled and hydrated
 * using the `valueConstructor` defined in their respective `DocumentType` schema.
 *
 * @param schema - The schema describing how to interpret each field in the item
 * @param input - The raw DynamoDB item (AttributeValue map)
 * @param valueConstructor - Optional constructor to hydrate the top-level result
 * @returns A fully unmarshalled and optionally hydrated object
 *
 * @example
 * ```ts
 * const result = unmarshallItem(userSchema, dynamoItem, User);
 * expect(result).toBeInstanceOf(User);
 * ```
 */
export function unmarshallItem<T extends object = MutableRecord>(
  schema: ItemSchema,
  input: Record<string, AttributeValue>,
  valueConstructor?: ZeroArgumentsConstructor<T>
): T {
  const target: T = valueConstructor ? new valueConstructor() : Object.create(null);

  for (const key of Object.keys(schema)) {
    const field: ItemSchemaType = schema[key];
    const attrName = field.attributeName ?? key;
    const attr = input[attrName];

    let value: unknown;

    if (attr !== undefined) {
      value = unmarshallValue(field, attr);
    } else if (typeof field.defaultProvider === "function") {
      value = field.defaultProvider();
    }

    if (value !== undefined) {
      (target as MutableRecord)[key] = value;
    }
  }

  return target;
}
