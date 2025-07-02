import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";

import type { ItemSchemaType } from "../schema";

export type { MutableRecord } from "../schema/";
export type DocumentAttr = { M: Record<string, AttributeValue> };
export type AttributeMap = { [key: string]: AttributeValue };
export type AttributeValueMap = Record<string, AttributeValue>;

export type MarshallHandler<TSchema extends ItemSchemaType = ItemSchemaType> = (
  schema: TSchema,
  value: unknown,
  options: marshallOptions
) => AttributeValue | undefined;

export type UnmarshallHandler<TSchema extends ItemSchemaType = ItemSchemaType> = (
  schema: TSchema,
  value: AttributeValue,
  options: unmarshallOptions
) => unknown;
