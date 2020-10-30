import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import {
  ListEntitiesDetectionJobsCommand,
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "../commands/ListEntitiesDetectionJobsCommand";
import { ComprehendPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListEntitiesDetectionJobsCommandInput,
  ...args: any
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitiesDetectionJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListEntitiesDetectionJobsCommandInput,
  ...args: any
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listEntitiesDetectionJobs(input, ...args);
};
export async function* listEntitiesDetectionJobsPaginate(
  config: ComprehendPaginationConfiguration,
  input: ListEntitiesDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitiesDetectionJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitiesDetectionJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
