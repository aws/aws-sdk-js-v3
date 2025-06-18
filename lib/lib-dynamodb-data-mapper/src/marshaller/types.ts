import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import type { ItemSchemaType } from "../schema";

export type { MutableRecord } from "../schema/";
export type DocumentAttr = { M: Record<string, AttributeValue> };
export type AttributeMap = { [key: string]: AttributeValue };
export type AttributeValueMap = Record<string, AttributeValue>;

export type MarshallHandler = (
  schema: ItemSchemaType,
  value: any,
  options: marshallOptions
) => AttributeValue | undefined;
export type UnmarshallHandler = (schema: ItemSchemaType, value: AttributeValue) => unknown;
