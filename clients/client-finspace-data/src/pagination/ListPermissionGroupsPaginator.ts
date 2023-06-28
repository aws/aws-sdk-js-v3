// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPermissionGroupsCommand,
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput,
} from "../commands/ListPermissionGroupsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof FinspaceDataClient) {
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
