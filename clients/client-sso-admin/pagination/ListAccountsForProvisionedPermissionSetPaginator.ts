import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import {
  ListAccountsForProvisionedPermissionSetCommand,
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "../commands/ListAccountsForProvisionedPermissionSetCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  ...args: any
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountsForProvisionedPermissionSetCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  ...args: any
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  // @ts-ignore
  return await client.listAccountsForProvisionedPermissionSet(input, ...args);
};
export async function* paginateListAccountsForProvisionedPermissionSet(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountsForProvisionedPermissionSetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountsForProvisionedPermissionSetCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
