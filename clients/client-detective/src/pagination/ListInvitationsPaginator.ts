// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DetectiveClient,
  input: ListInvitationsCommandInput,
  ...args: any
): Promise<ListInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInvitationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Detective,
  input: ListInvitationsCommandInput,
  ...args: any
): Promise<ListInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.listInvitations(input, ...args);
};
export async function* paginateListInvitations(
  config: DetectivePaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInvitationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInvitationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Detective) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DetectiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Detective | DetectiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
