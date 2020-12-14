import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListEdgePackagingJobsCommand,
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "../commands/ListEdgePackagingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListEdgePackagingJobsCommandInput,
  ...args: any
): Promise<ListEdgePackagingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEdgePackagingJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListEdgePackagingJobsCommandInput,
  ...args: any
): Promise<ListEdgePackagingJobsCommandOutput> => {
  // @ts-ignore
  return await client.listEdgePackagingJobs(input, ...args);
};
export async function* paginateListEdgePackagingJobs(
  config: SageMakerPaginationConfiguration,
  input: ListEdgePackagingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListEdgePackagingJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEdgePackagingJobsCommandOutput;
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
