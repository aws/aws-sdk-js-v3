// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchGroupsCommand,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput,
} from "../commands/SearchGroupsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchGroupsCommandInput,
  ...args: any
): Promise<SearchGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchGroups(
  config: QuickSightPaginationConfiguration,
  input: SearchGroupsCommandInput,
  ...additionalArguments: any
): Paginator<SearchGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
