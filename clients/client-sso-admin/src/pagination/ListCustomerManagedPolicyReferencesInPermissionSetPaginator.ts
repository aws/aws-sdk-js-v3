// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "../commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof SSOAdminClient) {
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
