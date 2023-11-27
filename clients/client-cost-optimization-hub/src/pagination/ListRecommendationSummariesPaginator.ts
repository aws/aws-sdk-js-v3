// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRecommendationSummariesCommand,
  ListRecommendationSummariesCommandInput,
  ListRecommendationSummariesCommandOutput,
} from "../commands/ListRecommendationSummariesCommand";
import { CostOptimizationHubClient } from "../CostOptimizationHubClient";
import { CostOptimizationHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CostOptimizationHubClient,
  input: ListRecommendationSummariesCommandInput,
  ...args: any
): Promise<ListRecommendationSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationSummariesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommendationSummaries(
  config: CostOptimizationHubPaginationConfiguration,
  input: ListRecommendationSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationSummariesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CostOptimizationHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostOptimizationHub | CostOptimizationHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
