import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListProcessingJobsCommand,
  ListProcessingJobsCommandInput,
  ListProcessingJobsCommandOutput,
} from "../commands/ListProcessingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListProcessingJobsCommandInput,
  ...args: any
): Promise<ListProcessingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProcessingJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListProcessingJobsCommandInput,
  ...args: any
): Promise<ListProcessingJobsCommandOutput> => {
  // @ts-ignore
  return await client.listProcessingJobs(input, ...args);
};
export async function* listProcessingJobsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListProcessingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListProcessingJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListProcessingJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
