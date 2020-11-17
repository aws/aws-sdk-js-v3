import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListTransformJobsCommand,
  ListTransformJobsCommandInput,
  ListTransformJobsCommandOutput,
} from "../commands/ListTransformJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTransformJobsCommandInput,
  ...args: any
): Promise<ListTransformJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTransformJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListTransformJobsCommandInput,
  ...args: any
): Promise<ListTransformJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTransformJobs(input, ...args);
};
export async function* paginateListTransformJobs(
  config: SageMakerPaginationConfiguration,
  input: ListTransformJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTransformJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTransformJobsCommandOutput;
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
