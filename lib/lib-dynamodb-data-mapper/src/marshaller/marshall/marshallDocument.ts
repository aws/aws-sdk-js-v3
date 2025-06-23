import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import type { DocumentType } from "../../schema";
import { marshallItem } from "./marshallItem";

/**
 * Marshalls a nested object according to a DocumentType schema.
 * Produces a DynamoDB M (Map) attribute.
 */
export function marshallDocument<T extends object>(
  value: T,
  schema: DocumentType,
  options?: marshallOptions
): AttributeValue {
  const M = marshallItem(schema.members, value, options);
  return { M };
}
