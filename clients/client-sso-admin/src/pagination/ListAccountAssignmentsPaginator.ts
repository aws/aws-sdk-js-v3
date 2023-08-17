// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "../commands/ListAccountAssignmentsCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountAssignmentsCommandInput,
  ...args: any
): Promise<ListAccountAssignmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssignmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccountAssignments(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssignmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountAssignmentsCommandOutput;
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
