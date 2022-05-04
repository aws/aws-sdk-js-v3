// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDeploymentJobsCommand,
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
} from "../commands/ListDeploymentJobsCommand";
import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListDeploymentJobsCommandInput,
  ...args: any
): Promise<ListDeploymentJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListDeploymentJobsCommandInput,
  ...args: any
): Promise<ListDeploymentJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentJobs(input, ...args);
};
export async function* paginateListDeploymentJobs(
  config: RoboMakerPaginationConfiguration,
  input: ListDeploymentJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
