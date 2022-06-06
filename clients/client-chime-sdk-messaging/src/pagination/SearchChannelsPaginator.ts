// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  SearchChannelsCommand,
  SearchChannelsCommandInput,
  SearchChannelsCommandOutput,
} from "../commands/SearchChannelsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: SearchChannelsCommandInput,
  ...args: any
): Promise<SearchChannelsCommandOutput> => {
  // @ts-ignore
  return await client.searchChannels(input, ...args);
};
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
    if (config.client instanceof ChimeSDKMessaging) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKMessagingClient) {
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
