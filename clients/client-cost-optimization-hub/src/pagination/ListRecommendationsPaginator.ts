// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { CostOptimizationHubClient } from "../CostOptimizationHubClient";
import { CostOptimizationHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CostOptimizationHubClient,
  input: ListRecommendationsCommandInput,
  ...args: any
): Promise<ListRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommendations(
  config: CostOptimizationHubPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationsCommandOutput;
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
