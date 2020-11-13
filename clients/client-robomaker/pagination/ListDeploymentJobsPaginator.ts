import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListDeploymentJobsCommand,
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
} from "../commands/ListDeploymentJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListDeploymentJobsCommandInput,
  ...args: any
): Promise<ListDeploymentJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListDeploymentJobsCommandInput,
  ...args: any
): Promise<ListDeploymentJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentJobs(input, ...args);
};
export async function* listDeploymentJobsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListDeploymentJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
