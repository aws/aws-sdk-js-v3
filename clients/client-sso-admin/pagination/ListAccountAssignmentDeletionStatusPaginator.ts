import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import {
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/ListAccountAssignmentDeletionStatusCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssignmentDeletionStatusCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAssignmentDeletionStatus(input, ...args);
};
export async function* listAccountAssignmentDeletionStatusPaginate(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentDeletionStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssignmentDeletionStatusCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
