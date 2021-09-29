import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { OrganizationsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListAccountsCommandInput,
  ...args: any
): Promise<ListAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Organizations,
  input: ListAccountsCommandInput,
  ...args: any
): Promise<ListAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listAccounts(input, ...args);
};
export async function* paginateListAccounts(
  config: OrganizationsPaginationConfiguration,
  input: ListAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountsCommandOutput;
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
