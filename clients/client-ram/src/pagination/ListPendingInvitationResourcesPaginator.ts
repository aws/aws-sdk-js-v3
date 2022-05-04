// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "../commands/ListPendingInvitationResourcesCommand";
import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPendingInvitationResourcesCommandInput,
  ...args: any
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPendingInvitationResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RAM,
  input: ListPendingInvitationResourcesCommandInput,
  ...args: any
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listPendingInvitationResources(input, ...args);
};
export async function* paginateListPendingInvitationResources(
  config: RAMPaginationConfiguration,
  input: ListPendingInvitationResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListPendingInvitationResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPendingInvitationResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
