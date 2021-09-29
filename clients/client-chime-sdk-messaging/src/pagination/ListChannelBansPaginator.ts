import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "../commands/ListChannelBansCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelBansCommandInput,
  ...args: any
): Promise<ListChannelBansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelBansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelBansCommandInput,
  ...args: any
): Promise<ListChannelBansCommandOutput> => {
  // @ts-ignore
  return await client.listChannelBans(input, ...args);
};
export async function* paginateListChannelBans(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelBansCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelBansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelBansCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
