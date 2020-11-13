import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import {
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "../commands/ListAccountAssignmentCreationStatusCommand";
import { SSOAdminPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListAccountAssignmentCreationStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountAssignmentCreationStatusCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListAccountAssignmentCreationStatusCommandInput,
  ...args: any
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  // @ts-ignore
  return await client.listAccountAssignmentCreationStatus(input, ...args);
};
export async function* listAccountAssignmentCreationStatusPaginate(
  config: SSOAdminPaginationConfiguration,
  input: ListAccountAssignmentCreationStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountAssignmentCreationStatusCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountAssignmentCreationStatusCommandOutput;
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
