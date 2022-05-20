// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPermissionSetsProvisionedToAccountCommand,
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "../commands/ListPermissionSetsProvisionedToAccountCommand";
import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...args: any
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionSetsProvisionedToAccountCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...args: any
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionSetsProvisionedToAccount(input, ...args);
};
export async function* paginateListPermissionSetsProvisionedToAccount(
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionSetsProvisionedToAccountCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionSetsProvisionedToAccountCommandOutput;
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
