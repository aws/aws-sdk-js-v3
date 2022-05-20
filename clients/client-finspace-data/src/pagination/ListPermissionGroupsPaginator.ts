// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPermissionGroupsCommand,
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput,
} from "../commands/ListPermissionGroupsCommand";
import { FinspaceData } from "../FinspaceData";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FinspaceDataClient,
  input: ListPermissionGroupsCommandInput,
  ...args: any
): Promise<ListPermissionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FinspaceData,
  input: ListPermissionGroupsCommandInput,
  ...args: any
): Promise<ListPermissionGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionGroups(input, ...args);
};
export async function* paginateListPermissionGroups(
  config: FinspaceDataPaginationConfiguration,
  input: ListPermissionGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FinspaceData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FinspaceDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FinspaceData | FinspaceDataClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
