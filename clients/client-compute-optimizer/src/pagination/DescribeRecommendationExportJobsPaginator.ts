// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRecommendationExportJobsCommand,
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
} from "../commands/DescribeRecommendationExportJobsCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ComputeOptimizerClient,
  input: DescribeRecommendationExportJobsCommandInput,
  ...args: any
): Promise<DescribeRecommendationExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRecommendationExportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRecommendationExportJobs(
  config: ComputeOptimizerPaginationConfiguration,
  input: DescribeRecommendationExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRecommendationExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRecommendationExportJobsCommandOutput;
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
