import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMembershipsForAppInstanceUserCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.listChannelMembershipsForAppInstanceUser(input, ...args);
};
export async function* paginateListChannelMembershipsForAppInstanceUser(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMembershipsForAppInstanceUserCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMembershipsForAppInstanceUserCommandOutput;
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
