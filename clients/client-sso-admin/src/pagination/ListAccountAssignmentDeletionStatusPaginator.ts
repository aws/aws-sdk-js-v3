// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/ListAccountAssignmentDeletionStatusCommand";
import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import { SSOAdminPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssignmentDeletionStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAssignmentDeletionStatus(input, ...args);
};
export async function* paginateListAccountAssignmentDeletionStatus(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssignmentDeletionStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountAssignmentDeletionStatusCommandOutput;
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
