import type { AttributeValue } from "@aws-sdk/client-dynamodb";

import type { ItemSchema } from "../../schema";
import { unmarshallValue } from "./unmarshallValue";

/**
 * Unmarshalls a DynamoDB item into a plain JavaScript object
 * using a schema. Used for factory-based hydration.
 *
 * @param item - The raw DynamoDB item.
 * @param schema - The schema used to guide unmarshalling.
 * @returns A plain object with unmarshalled values.
 */
export function unmarshallPlainObject(item: Record<string, AttributeValue>, schema: ItemSchema): Record<string, any> {
  const output: Record<string, any> = {};

  for (const [propName, definition] of Object.entries(schema)) {
    const attr = item[definition.attributeName ?? propName];
    if (attr === undefined) continue;

    if (definition.type === "Document") {
      const docValue = (attr as any).M;
      if (!docValue) continue;

      output[propName] = unmarshallPlainObject(docValue, definition.members);
    } else {
      output[propName] = unmarshallValue(definition, attr);
    }
  }

  return output;
}
