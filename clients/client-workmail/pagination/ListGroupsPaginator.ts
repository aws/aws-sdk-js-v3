import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGroups(input, ...args);
};
export async function* listGroupsPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupsCommandOutput;
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
