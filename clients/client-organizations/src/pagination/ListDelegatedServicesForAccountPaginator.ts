// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDelegatedServicesForAccountCommand,
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "../commands/ListDelegatedServicesForAccountCommand";
import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Organizations,
  input: ListDelegatedServicesForAccountCommandInput,
  ...args: any
): Promise<ListDelegatedServicesForAccountCommandOutput> => {
  // @ts-ignore
  return await client.listDelegatedServicesForAccount(input, ...args);
};
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
    if (config.client instanceof Organizations) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OrganizationsClient) {
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
