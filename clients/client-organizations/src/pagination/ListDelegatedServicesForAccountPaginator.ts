// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDelegatedServicesForAccountCommand,
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "../commands/ListDelegatedServicesForAccountCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListDelegatedServicesForAccountCommandInput,
  ...args: any
): Promise<ListDelegatedServicesForAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDelegatedServicesForAccountCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDelegatedServicesForAccount(
  config: OrganizationsPaginationConfiguration,
  input: ListDelegatedServicesForAccountCommandInput,
  ...additionalArguments: any
): Paginator<ListDelegatedServicesForAccountCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDelegatedServicesForAccountCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
