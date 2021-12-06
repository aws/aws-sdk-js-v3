import { Paginator } from "@aws-sdk/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DynamoDBClient,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DynamoDB,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.listTables(input, ...args);
};
export async function* paginateListTables(
  config: DynamoDBPaginationConfiguration,
  input: ListTablesCommandInput,
  ...additionalArguments: any
): Paginator<ListTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.ExclusiveStartTableName
  let token: typeof input.ExclusiveStartTableName | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTablesCommandOutput;
  while (hasNext) {
    input.ExclusiveStartTableName = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DynamoDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    token = page.LastEvaluatedTableName;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
