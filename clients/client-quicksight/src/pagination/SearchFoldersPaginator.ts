// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchFoldersCommand,
  SearchFoldersCommandInput,
  SearchFoldersCommandOutput,
} from "../commands/SearchFoldersCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchFoldersCommandInput,
  ...args: any
): Promise<SearchFoldersCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchFoldersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchFolders(
  config: QuickSightPaginationConfiguration,
  input: SearchFoldersCommandInput,
  ...additionalArguments: any
): Paginator<SearchFoldersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchFoldersCommandOutput;
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
