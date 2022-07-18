// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "../commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ...args: any
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomerManagedPolicyReferencesInPermissionSetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ...args: any
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  // @ts-ignore
  return await client.listCustomerManagedPolicyReferencesInPermissionSet(input, ...args);
};
export async function* paginateListCustomerManagedPolicyReferencesInPermissionSet(
  config: SSOAdminPaginationConfiguration,
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput;
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
