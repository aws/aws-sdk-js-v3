// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListShareInvitationsCommand,
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "../commands/ListShareInvitationsCommand";
import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListShareInvitationsCommandInput,
  ...args: any
): Promise<ListShareInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListShareInvitationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WellArchitected,
  input: ListShareInvitationsCommandInput,
  ...args: any
): Promise<ListShareInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.listShareInvitations(input, ...args);
};
export async function* paginateListShareInvitations(
  config: WellArchitectedPaginationConfiguration,
  input: ListShareInvitationsCommandInput,
  ...additionalArguments: any
): Paginator<ListShareInvitationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListShareInvitationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitected) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
