import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListCompilationJobsCommand,
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "../commands/ListCompilationJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListCompilationJobsCommandInput,
  ...args: any
): Promise<ListCompilationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCompilationJobsCommand(input), ...args);
};
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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
