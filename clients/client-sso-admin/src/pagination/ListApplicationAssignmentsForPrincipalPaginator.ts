// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListApplicationAssignmentsForPrincipalCommand,
  ListApplicationAssignmentsForPrincipalCommandInput,
  ListApplicationAssignmentsForPrincipalCommandOutput,
} from "../commands/ListApplicationAssignmentsForPrincipalCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListApplicationAssignmentsForPrincipalCommandInput,
  ...args: any
): Promise<ListApplicationAssignmentsForPrincipalCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationAssignmentsForPrincipalCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationAssignmentsForPrincipal(
  config: SSOAdminPaginationConfiguration,
  input: ListApplicationAssignmentsForPrincipalCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationAssignmentsForPrincipalCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationAssignmentsForPrincipalCommandOutput;
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
