// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  SearchChannelsCommand,
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput,
} from "../commands/SearchChannelsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: SearchChannelsCommandInput,
  ...args: any
): Promise<SearchChannelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchChannelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchChannels(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: SearchChannelsCommandInput,
  ...additionalArguments: any
): Paginator<SearchChannelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchChannelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMessagingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKMessaging | ChimeSDKMessagingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
