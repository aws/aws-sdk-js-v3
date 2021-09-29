import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { GuardDutyPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
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
  client: GuardDuty,
  input: ListInvitationsCommandInput,
  ...args: any
): Promise<ListInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.listInvitations(input, ...args);
};
export async function* paginateListInvitations(
  config: GuardDutyPaginationConfiguration,
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
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
