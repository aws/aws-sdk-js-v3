// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { EMRContainers } from "../EMRContainers";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRContainersClient,
  input: ListJobRunsCommandInput,
  ...args: any
): Promise<ListJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMRContainers,
  input: ListJobRunsCommandInput,
  ...args: any
): Promise<ListJobRunsCommandOutput> => {
  // @ts-ignore
  return await client.listJobRuns(input, ...args);
};
export async function* paginateListJobRuns(
  config: EMRContainersPaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListJobRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobRunsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EMRContainers) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRContainersClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMRContainers | EMRContainersClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
