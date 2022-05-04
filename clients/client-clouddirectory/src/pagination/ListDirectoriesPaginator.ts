// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListDirectoriesCommand,
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput,
} from "../commands/ListDirectoriesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListDirectoriesCommandInput,
  ...args: any
): Promise<ListDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDirectoriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListDirectoriesCommandInput,
  ...args: any
): Promise<ListDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.listDirectories(input, ...args);
};
export async function* paginateListDirectories(
  config: CloudDirectoryPaginationConfiguration,
  input: ListDirectoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListDirectoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDirectoriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
