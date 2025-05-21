import type { AttributeValue } from '@aws-sdk/client-dynamodb';

export type ExpressionAttributeNameMap = Record<string, string>;
export type ExpressionAttributeValueMap = Record<string, AttributeValue>;