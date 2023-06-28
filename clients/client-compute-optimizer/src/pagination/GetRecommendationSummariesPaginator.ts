// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetRecommendationSummariesCommand,
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "../commands/GetRecommendationSummariesCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ComputeOptimizerClient,
  input: GetRecommendationSummariesCommandInput,
  ...args: any
): Promise<GetRecommendationSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetRecommendationSummariesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetRecommendationSummaries(
  config: ComputeOptimizerPaginationConfiguration,
  input: GetRecommendationSummariesCommandInput,
  ...additionalArguments: any
): Paginator<GetRecommendationSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetRecommendationSummariesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ComputeOptimizerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ComputeOptimizer | ComputeOptimizerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
