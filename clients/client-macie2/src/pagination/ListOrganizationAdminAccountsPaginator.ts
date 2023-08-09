// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListOrganizationAdminAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationAdminAccountsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOrganizationAdminAccounts(
  config: Macie2PaginationConfiguration,
  input: ListOrganizationAdminAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationAdminAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationAdminAccountsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
