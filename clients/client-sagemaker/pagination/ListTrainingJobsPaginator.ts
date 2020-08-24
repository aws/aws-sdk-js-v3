import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListTrainingJobsCommand,
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput,
} from "../commands/ListTrainingJobsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTrainingJobsCommandInput,
  ...args: any
): Promise<ListTrainingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrainingJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListTrainingJobsCommandInput,
  ...args: any
): Promise<ListTrainingJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTrainingJobs(input, ...args);
};
export async function* listTrainingJobsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListTrainingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrainingJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTrainingJobsCommandOutput;
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
