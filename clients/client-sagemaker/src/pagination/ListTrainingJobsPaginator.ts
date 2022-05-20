// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTrainingJobsCommand,
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput,
} from "../commands/ListTrainingJobsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTrainingJobsCommandInput,
  ...args: any
): Promise<ListTrainingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrainingJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListTrainingJobsCommandInput,
  ...args: any
): Promise<ListTrainingJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTrainingJobs(input, ...args);
};
export async function* paginateListTrainingJobs(
  config: SageMakerPaginationConfiguration,
  input: ListTrainingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrainingJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrainingJobsCommandOutput;
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
