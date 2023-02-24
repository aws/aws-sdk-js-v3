// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListSubChannelsCommand,
  ListSubChannelsCommandInput,
  ListSubChannelsCommandOutput,
} from "../commands/ListSubChannelsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListSubChannelsCommandInput,
  ...args: any
): Promise<ListSubChannelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubChannelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListSubChannelsCommandInput,
  ...args: any
): Promise<ListSubChannelsCommandOutput> => {
  // @ts-ignore
  return await client.listSubChannels(input, ...args);
};
export async function* paginateListSubChannels(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListSubChannelsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubChannelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubChannelsCommandOutput;
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
