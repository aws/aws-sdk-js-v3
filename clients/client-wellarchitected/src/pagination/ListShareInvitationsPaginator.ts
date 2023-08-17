// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListShareInvitationsCommand,
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "../commands/ListShareInvitationsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof WellArchitectedClient) {
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
