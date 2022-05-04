// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListInferenceRecommendationsJobsCommand,
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListInferenceRecommendationsJobsCommandInput,
  ...args: any
): Promise<ListInferenceRecommendationsJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInferenceRecommendationsJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListInferenceRecommendationsJobsCommandInput,
  ...args: any
): Promise<ListInferenceRecommendationsJobsCommandOutput> => {
  // @ts-ignore
  return await client.listInferenceRecommendationsJobs(input, ...args);
};
export async function* paginateListInferenceRecommendationsJobs(
  config: SageMakerPaginationConfiguration,
  input: ListInferenceRecommendationsJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListInferenceRecommendationsJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInferenceRecommendationsJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
