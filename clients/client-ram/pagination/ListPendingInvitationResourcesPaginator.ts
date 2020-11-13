import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import {
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "../commands/ListPendingInvitationResourcesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RAMClient,
  input: ListPendingInvitationResourcesCommandInput,
  ...args: any
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPendingInvitationResourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RAM,
  input: ListPendingInvitationResourcesCommandInput,
  ...args: any
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listPendingInvitationResources(input, ...args);
};
export async function* listPendingInvitationResourcesPaginate(
  config: RAMPaginationConfiguration,
  input: ListPendingInvitationResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListPendingInvitationResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
