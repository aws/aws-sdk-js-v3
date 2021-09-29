import { ChimeSDKMessaging } from "../ChimeSDKMessaging";
import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserCommandInput,
  ListChannelsModeratedByAppInstanceUserCommandOutput,
} from "../commands/ListChannelsModeratedByAppInstanceUserCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMessagingClient,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelsModeratedByAppInstanceUserCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMessaging,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelsModeratedByAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.listChannelsModeratedByAppInstanceUser(input, ...args);
};
export async function* paginateListChannelsModeratedByAppInstanceUser(
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelsModeratedByAppInstanceUserCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelsModeratedByAppInstanceUserCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelsModeratedByAppInstanceUserCommandOutput;
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
