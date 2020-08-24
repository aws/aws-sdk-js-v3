import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListLabelingJobsForWorkteamCommand,
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "../commands/ListLabelingJobsForWorkteamCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListLabelingJobsForWorkteamCommandInput,
  ...args: any
): Promise<ListLabelingJobsForWorkteamCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLabelingJobsForWorkteamCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListLabelingJobsForWorkteamCommandInput,
  ...args: any
): Promise<ListLabelingJobsForWorkteamCommandOutput> => {
  // @ts-ignore
  return await client.listLabelingJobsForWorkteam(input, ...args);
};
export async function* listLabelingJobsForWorkteamPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListLabelingJobsForWorkteamCommandInput,
  ...additionalArguments: any
): Paginator<ListLabelingJobsForWorkteamCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLabelingJobsForWorkteamCommandOutput;
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
