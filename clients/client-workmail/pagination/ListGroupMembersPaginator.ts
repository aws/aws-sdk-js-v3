import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "../commands/ListGroupMembersCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListGroupMembersCommandInput,
  ...args: any
): Promise<ListGroupMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupMembersCommand(input), ...args);
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListGroupMembersCommandInput,
  ...args: any
): Promise<ListGroupMembersCommandOutput> => {
  // @ts-ignore
  return await client.listGroupMembers(input, ...args);
};
export async function* listGroupMembersPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListGroupMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupMembersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
