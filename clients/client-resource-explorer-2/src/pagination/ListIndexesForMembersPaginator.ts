// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIndexesForMembersCommand,
  ListIndexesForMembersCommandInput,
  ListIndexesForMembersCommandOutput,
} from "../commands/ListIndexesForMembersCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ResourceExplorer2Client,
  input: ListIndexesForMembersCommandInput,
  ...args: any
): Promise<ListIndexesForMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndexesForMembersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIndexesForMembers(
  config: ResourceExplorer2PaginationConfiguration,
  input: ListIndexesForMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListIndexesForMembersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndexesForMembersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ResourceExplorer2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceExplorer2 | ResourceExplorer2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
