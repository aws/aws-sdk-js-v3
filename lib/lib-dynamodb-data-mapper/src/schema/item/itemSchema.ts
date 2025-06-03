import { isSchemaType, ItemSchemaType } from "./itemType";

/**
 * A key-to-value mapping outlining how to convert an arbitrary JavaScript
 * object into a strongly typed DynamoDB AttributeMap and back again.
 */
export interface ItemSchema {
  [key: string]: ItemSchemaType;
}

/**
 * Evaluates whether the provided argument is a Schema object
 */
export function isSchema(arg: any): arg is ItemSchema {
  if (!Boolean(arg) || typeof arg !== "object") {
    return false;
  }

  for (const key of Object.keys(arg)) {
    if (!isSchemaType(arg[key])) {
      return false;
    }
  }

  return true;
}
