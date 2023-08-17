// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "../commands/ListAccountAssignmentCreationStatusCommand";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountAssignmentCreationStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssignmentCreationStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccountAssignmentCreationStatus(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentCreationStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssignmentCreationStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountAssignmentCreationStatusCommandOutput;
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
