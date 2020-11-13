import { Identitystore } from "../Identitystore";
import { IdentitystoreClient } from "../IdentitystoreClient";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { IdentitystorePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IdentitystoreClient,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Identitystore,
  input: ListGroupsCommandInput,
  ...args: any
): Promise<ListGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGroups(input, ...args);
};
export async function* listGroupsPaginate(
  config: IdentitystorePaginationConfiguration,
  input: ListGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Identitystore) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IdentitystoreClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Identitystore | IdentitystoreClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
