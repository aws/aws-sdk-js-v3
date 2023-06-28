// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof EMRContainersClient) {
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
