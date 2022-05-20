// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "../commands/ListGroupMembersCommand";
import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListGroupMembersCommandInput,
  ...args: any
): Promise<ListGroupMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkMail,
  input: ListGroupMembersCommandInput,
  ...args: any
): Promise<ListGroupMembersCommandOutput> => {
  // @ts-ignore
  return await client.listGroupMembers(input, ...args);
};
export async function* paginateListGroupMembers(
  config: WorkMailPaginationConfiguration,
  input: ListGroupMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupMembersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
