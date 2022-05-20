// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelFlowsCommand,
  ListChannelFlowsCommandInput,
  ListChannelFlowsCommandOutput,
} from "../commands/ListChannelFlowsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelFlowsCommandInput,
  ...args: any
): Promise<ListChannelFlowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelFlowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelFlowsCommandInput,
  ...args: any
): Promise<ListChannelFlowsCommandOutput> => {
  // @ts-ignore
  return await client.listChannelFlows(input, ...args);
};
export async function* paginateListChannelFlows(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelFlowsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelFlowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelFlowsCommandOutput;
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
