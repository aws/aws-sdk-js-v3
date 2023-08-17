// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "../commands/ListContributorInsightsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
