// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DetectiveClient,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Detective,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.listMembers(input, ...args);
};
export async function* paginateListMembers(
  config: DetectivePaginationConfiguration,
  input: ListMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMembersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Detective) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DetectiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Detective | DetectiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
