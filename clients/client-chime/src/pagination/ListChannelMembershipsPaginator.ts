// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListChannelMembershipsCommandInput,
  ...args: any
): Promise<ListChannelMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChannelMembershipsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListChannelMemberships(
  config: ChimePaginationConfiguration,
  input: ListChannelMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListChannelMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChannelMembershipsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeClient) {
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
