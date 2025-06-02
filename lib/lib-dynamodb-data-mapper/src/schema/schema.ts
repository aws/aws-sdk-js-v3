import { isSchemaType, SchemaType } from "./schemaType";

/**
 * A key-to-value mapping outlining how to convert an arbitrary JavaScript
 * object into a strongly typed DynamoDB AttributeMap and back again.
 */
export interface Schema {
  [key: string]: SchemaType;
}

/**
 * Evaluates whether the provided argument is a Schema object
 */
export function isSchema(arg: any): arg is Schema {
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
