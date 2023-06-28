// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKIdentityClient } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceBotsCommand,
  ListAppInstanceBotsCommandInput,
  ListAppInstanceBotsCommandOutput,
} from "../commands/ListAppInstanceBotsCommand";
import { ChimeSDKIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKIdentityClient,
  input: ListAppInstanceBotsCommandInput,
  ...args: any
): Promise<ListAppInstanceBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstanceBotsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppInstanceBots(
  config: ChimeSDKIdentityPaginationConfiguration,
  input: ListAppInstanceBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstanceBotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstanceBotsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKIdentityClient) {
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
