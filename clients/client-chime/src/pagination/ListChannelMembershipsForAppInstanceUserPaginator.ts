// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
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
  client: Chime,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...args: any
): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> => {
  // @ts-ignore
  return await client.listChannelMembershipsForAppInstanceUser(input, ...args);
};
export async function* paginateListChannelMembershipsForAppInstanceUser(
  config: ChimePaginationConfiguration,
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
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
