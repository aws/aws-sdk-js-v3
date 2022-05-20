// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKIdentity } from "../ChimeSDKIdentity";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKIdentityClient,
  input: ListAppInstanceUsersCommandInput,
  ...args: any
): Promise<ListAppInstanceUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstanceUsersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKIdentity,
  input: ListAppInstanceUsersCommandInput,
  ...args: any
): Promise<ListAppInstanceUsersCommandOutput> => {
  // @ts-ignore
  return await client.listAppInstanceUsers(input, ...args);
};
export async function* paginateListAppInstanceUsers(
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceUsersCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstanceUsersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstanceUsersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKIdentity) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKIdentityClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKIdentity | ChimeSDKIdentityClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
