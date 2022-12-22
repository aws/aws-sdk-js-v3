// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetRecommendationSummariesCommand,
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput,
} from "../commands/GetRecommendationSummariesCommand";
import { ComputeOptimizer } from "../ComputeOptimizer";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: ComputeOptimizer,
  input: GetRecommendationSummariesCommandInput,
  ...args: any
): Promise<GetRecommendationSummariesCommandOutput> => {
  // @ts-ignore
  return await client.getRecommendationSummaries(input, ...args);
};
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
    if (config.client instanceof ComputeOptimizer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComputeOptimizerClient) {
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
