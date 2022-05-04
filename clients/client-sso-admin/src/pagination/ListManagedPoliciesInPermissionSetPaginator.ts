// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListManagedPoliciesInPermissionSetCommand,
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "../commands/ListManagedPoliciesInPermissionSetCommand";
import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListManagedPoliciesInPermissionSetCommandInput,
  ...args: any
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedPoliciesInPermissionSetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListManagedPoliciesInPermissionSetCommandInput,
  ...args: any
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  // @ts-ignore
  return await client.listManagedPoliciesInPermissionSet(input, ...args);
};
export async function* paginateListManagedPoliciesInPermissionSet(
  config: SSOAdminPaginationConfiguration,
  input: ListManagedPoliciesInPermissionSetCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedPoliciesInPermissionSetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedPoliciesInPermissionSetCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSOAdmin) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
