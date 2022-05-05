// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelsAssociatedWithChannelFlowCommand,
  ListChannelsAssociatedWithChannelFlowCommandInput,
  ListChannelsAssociatedWithChannelFlowCommandOutput,
} from "../commands/ListChannelsAssociatedWithChannelFlowCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  ...args: any
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelsAssociatedWithChannelFlowCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  ...args: any
): Promise<ListChannelsAssociatedWithChannelFlowCommandOutput> => {
  // @ts-ignore
  return await client.listChannelsAssociatedWithChannelFlow(input, ...args);
};
export async function* paginateListChannelsAssociatedWithChannelFlow(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelsAssociatedWithChannelFlowCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelsAssociatedWithChannelFlowCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelsAssociatedWithChannelFlowCommandOutput;
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
