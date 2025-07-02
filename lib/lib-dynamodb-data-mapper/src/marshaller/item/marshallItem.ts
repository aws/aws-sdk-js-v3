import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import { ItemSchema } from "../../schema";
import type { MutableRecord } from "../types";
import { marshallValue } from "./marshallValue";

export function marshallItem<T extends object = MutableRecord>(
  schema: ItemSchema,
  input: T,
  options: marshallOptions = {}
): Record<string, AttributeValue> {
  const output: Record<string, AttributeValue> = {};

  for (const [key, field] of Object.entries(schema)) {
    const attrName = field.attributeName ?? key;
    const value = input[key as keyof T];
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
