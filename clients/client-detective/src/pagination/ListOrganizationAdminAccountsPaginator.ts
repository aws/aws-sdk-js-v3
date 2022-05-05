// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DetectiveClient,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationAdminAccountsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Detective,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizationAdminAccounts(input, ...args);
};
export async function* paginateListOrganizationAdminAccounts(
  config: DetectivePaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationAdminAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationAdminAccountsCommandOutput;
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
