import { PutCommand } from '@aws-sdk/lib-dynamodb';
import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { getTableName } from '../utils/getTableName';

interface PutCommandInput<T> {
  client: DynamoDBDocumentClient;
  item: T;
}

export async function runPutCommand<T extends object>({
  client,
  item
}: PutCommandInput<T>): Promise<T> {
  const TableName = getTableName(item.constructor);
  await client.send(new PutCommand({ TableName, Item: item }));
  return item;
}