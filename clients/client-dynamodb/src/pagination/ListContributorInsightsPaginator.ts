import { Paginator } from "@aws-sdk/types";

import {
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "../commands/ListContributorInsightsCommand";
import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DynamoDBClient,
  input: ListContributorInsightsCommandInput,
  ...args: any
): Promise<ListContributorInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContributorInsightsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DynamoDB,
  input: ListContributorInsightsCommandInput,
  ...args: any
): Promise<ListContributorInsightsCommandOutput> => {
  // @ts-ignore
  return await client.listContributorInsights(input, ...args);
};
export async function* paginateListContributorInsights(
  config: DynamoDBPaginationConfiguration,
  input: ListContributorInsightsCommandInput,
  ...additionalArguments: any
): Paginator<ListContributorInsightsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContributorInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DynamoDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
