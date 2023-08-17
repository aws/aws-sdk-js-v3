// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.LastEvaluatedKey;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
