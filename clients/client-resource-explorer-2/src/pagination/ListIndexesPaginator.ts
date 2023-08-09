// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListIndexesCommand, ListIndexesCommandInput, ListIndexesCommandOutput } from "../commands/ListIndexesCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ResourceExplorer2Client,
  input: ListIndexesCommandInput,
  ...args: any
): Promise<ListIndexesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndexesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIndexes(
  config: ResourceExplorer2PaginationConfiguration,
  input: ListIndexesCommandInput,
  ...additionalArguments: any
): Paginator<ListIndexesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndexesCommandOutput;
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
