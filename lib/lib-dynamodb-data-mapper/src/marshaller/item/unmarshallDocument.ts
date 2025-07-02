import { unmarshallOptions } from "@aws-sdk/util-dynamodb";

import type { DocumentType } from "../../schema";
import type { AttributeValueMap } from "../types";
import { unmarshallItem } from "./unmarshallItem";

/**
 * Unmarshalls a DynamoDB M value into a typed object
 * based on a DocumentType schema. Supports optional class hydration.
 */
export function unmarshallDocument<T extends object>(
  rawMap: AttributeValueMap | undefined,
  schema: DocumentType<T>,
  options?: unmarshallOptions
): T | undefined {
  if (!rawMap) return undefined;
  return unmarshallItem(schema.members, rawMap, options) as T;
}
