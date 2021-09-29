import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import {
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "../commands/ListAccountAssignmentsCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListAccountAssignmentsCommandInput,
  ...args: any
): Promise<ListAccountAssignmentsCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAssignments(input, ...args);
};
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
