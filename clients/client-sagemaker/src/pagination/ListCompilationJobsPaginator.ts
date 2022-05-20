// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCompilationJobsCommand,
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "../commands/ListCompilationJobsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListCompilationJobsCommandInput,
  ...args: any
): Promise<ListCompilationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCompilationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListCompilationJobsCommandInput,
  ...args: any
): Promise<ListCompilationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listCompilationJobs(input, ...args);
};
export async function* paginateListCompilationJobs(
  config: SageMakerPaginationConfiguration,
  input: ListCompilationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListCompilationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCompilationJobsCommandOutput;
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
