// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKIdentity } from "../ChimeSDKIdentity";
import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceUserEndpointsCommand,
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput,
} from "../commands/ListAppInstanceUserEndpointsCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKIdentityClient,
  input: ListAppInstanceUserEndpointsCommandInput,
  ...args: any
): Promise<ListAppInstanceUserEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstanceUserEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKIdentity,
  input: ListAppInstanceUserEndpointsCommandInput,
  ...args: any
): Promise<ListAppInstanceUserEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listAppInstanceUserEndpoints(input, ...args);
};
export async function* paginateListAppInstanceUserEndpoints(
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceUserEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstanceUserEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstanceUserEndpointsCommandOutput;
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
