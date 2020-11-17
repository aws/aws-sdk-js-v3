import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListAutoMLJobsCommand,
  ListAutoMLJobsCommandInput,
  ListAutoMLJobsCommandOutput,
} from "../commands/ListAutoMLJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListAutoMLJobsCommandInput,
  ...args: any
): Promise<ListAutoMLJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAutoMLJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListAutoMLJobsCommandInput,
  ...args: any
): Promise<ListAutoMLJobsCommandOutput> => {
  // @ts-ignore
  return await client.listAutoMLJobs(input, ...args);
};
export async function* paginateListAutoMLJobs(
  config: SageMakerPaginationConfiguration,
  input: ListAutoMLJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListAutoMLJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAutoMLJobsCommandOutput;
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
