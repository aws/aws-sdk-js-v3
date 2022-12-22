// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetLambdaFunctionRecommendationsCommand,
  GetLambdaFunctionRecommendationsCommandInput,
  GetLambdaFunctionRecommendationsCommandOutput,
} from "../commands/GetLambdaFunctionRecommendationsCommand";
import { ComputeOptimizer } from "../ComputeOptimizer";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComputeOptimizerClient,
  input: GetLambdaFunctionRecommendationsCommandInput,
  ...args: any
): Promise<GetLambdaFunctionRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLambdaFunctionRecommendationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ComputeOptimizer,
  input: GetLambdaFunctionRecommendationsCommandInput,
  ...args: any
): Promise<GetLambdaFunctionRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.getLambdaFunctionRecommendations(input, ...args);
};
export async function* paginateGetLambdaFunctionRecommendations(
  config: ComputeOptimizerPaginationConfiguration,
  input: GetLambdaFunctionRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<GetLambdaFunctionRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLambdaFunctionRecommendationsCommandOutput;
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
