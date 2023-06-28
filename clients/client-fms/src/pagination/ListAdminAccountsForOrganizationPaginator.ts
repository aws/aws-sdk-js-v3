// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAdminAccountsForOrganizationCommand,
  ListAdminAccountsForOrganizationCommandInput,
  ListAdminAccountsForOrganizationCommandOutput,
} from "../commands/ListAdminAccountsForOrganizationCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FMSClient,
  input: ListAdminAccountsForOrganizationCommandInput,
  ...args: any
): Promise<ListAdminAccountsForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAdminAccountsForOrganizationCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAdminAccountsForOrganization(
  config: FMSPaginationConfiguration,
  input: ListAdminAccountsForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<ListAdminAccountsForOrganizationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAdminAccountsForOrganizationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
