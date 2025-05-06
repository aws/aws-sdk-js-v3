import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { GetCommand } from '@aws-sdk/lib-dynamodb';

import { getTableName } from '../baseCommands/getTableName';

interface GetCommandInput<T> {
  client: DynamoDBDocumentClient;
  key: Partial<T>;
  model: new () => T;
}

export async function runGetCommand<T>({
  client,
  key,
  model
}: GetCommandInput<T>): Promise<T> {
  const TableName = getTableName(model);
  const { Item } = await client.send(new GetCommand({ TableName, Key: key }));
  if (!Item) throw new Error('Item not found');
  return Object.assign(new model(), Item);
}