// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListSubChannelsCommand,
  ListSubChannelsCommandInput,
  ListSubChannelsCommandOutput,
} from "../commands/ListSubChannelsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
