import type { AttributeValueMap } from "../../internal/AttributeValueMap";
import type { DocumentType } from "../../schema";
import { unmarshallItem } from "./unmarshallItem";

/**
 * Unmarshalls a DynamoDB M value into a typed object
 * based on a DocumentType schema. Supports optional class hydration.
 */
export function unmarshallDocument(rawMap: AttributeValueMap | undefined, schema: DocumentType): any {
  if (!rawMap) return undefined;
  return unmarshallItem(schema.members, rawMap, schema.valueConstructor);
}
