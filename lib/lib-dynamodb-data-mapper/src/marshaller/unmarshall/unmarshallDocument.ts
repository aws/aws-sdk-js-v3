import type { DocumentType } from "../../schema";
import type { AttributeValueMap, MutableRecord } from "../types";
import { unmarshallItem } from "./unmarshallItem";

/**
 * Unmarshalls a DynamoDB M value into a typed object
 * based on a DocumentType schema. Supports optional class hydration.
 */
export function unmarshallDocument(
  rawMap: AttributeValueMap | undefined,
  schema: DocumentType
): MutableRecord | undefined {
  if (!rawMap) return undefined;
  return unmarshallItem(schema.members, rawMap, schema.valueConstructor);
}
