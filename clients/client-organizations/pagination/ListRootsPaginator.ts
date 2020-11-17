import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import { ListRootsCommand, ListRootsCommandInput, ListRootsCommandOutput } from "../commands/ListRootsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListRootsCommandInput,
  ...args: any
): Promise<ListRootsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRootsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Organizations,
  input: ListRootsCommandInput,
  ...args: any
): Promise<ListRootsCommandOutput> => {
  // @ts-ignore
  return await client.listRoots(input, ...args);
};
export async function* paginateListRoots(
  config: OrganizationsPaginationConfiguration,
  input: ListRootsCommandInput,
  ...additionalArguments: any
): Paginator<ListRootsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRootsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
