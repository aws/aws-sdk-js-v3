import { Paginator } from "@aws-sdk/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DynamoDBClient,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DynamoDB,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  // @ts-ignore
  return await client.query(input, ...args);
};
export async function* paginateQuery(
  config: DynamoDBPaginationConfiguration,
  input: QueryCommandInput,
  ...additionalArguments: any
): Paginator<QueryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.ExclusiveStartKey
  let token: typeof input.ExclusiveStartKey | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryCommandOutput;
  while (hasNext) {
    input.ExclusiveStartKey = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DynamoDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    token = page.LastEvaluatedKey;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
