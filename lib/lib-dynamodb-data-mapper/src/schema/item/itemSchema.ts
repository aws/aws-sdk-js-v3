import { isSchemaType, ItemSchemaType } from "./itemType";

/**
 * A key-to-value mapping outlining how to convert an arbitrary JavaScript
 * object into a strongly typed DynamoDB AttributeMap and back again.
 */
export interface ItemSchema {
  [key: string]: ItemSchemaType;
}

/**
 * Evaluates whether the provided value is a valid ItemSchema object.
 *
 * A valid ItemSchema:
 * - Is a non-null object
 * - Has string keys
 * - Each value is a valid ItemSchemaType (validated via isSchemaType)
 */
export function isSchema(value: unknown): value is ItemSchema {
  if (typeof value !== "object" || value === null) return false;

  const record = value as Record<string, unknown>;
  return Object.values(record).every((value) => isSchemaType(value));
}
