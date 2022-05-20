// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { FinspaceData } from "../FinspaceData";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FinspaceDataClient,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FinspaceData,
  input: ListUsersCommandInput,
  ...args: any
): Promise<ListUsersCommandOutput> => {
  // @ts-ignore
  return await client.listUsers(input, ...args);
};
export async function* paginateListUsers(
  config: FinspaceDataPaginationConfiguration,
  input: ListUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListUsersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUsersCommandOutput;
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
