// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPermissionSetsCommand,
  ListPermissionSetsCommandInput,
  ListPermissionSetsCommandOutput,
} from "../commands/ListPermissionSetsCommand";
import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListPermissionSetsCommandInput,
  ...args: any
): Promise<ListPermissionSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListPermissionSetsCommandInput,
  ...args: any
): Promise<ListPermissionSetsCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionSets(input, ...args);
};
export async function* paginateListPermissionSets(
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionSetsCommandOutput;
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
