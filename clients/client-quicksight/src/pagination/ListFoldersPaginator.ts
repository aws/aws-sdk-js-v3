// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListFoldersCommand, ListFoldersCommandInput, ListFoldersCommandOutput } from "../commands/ListFoldersCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListFoldersCommandInput,
  ...args: any
): Promise<ListFoldersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFoldersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFolders(
  config: QuickSightPaginationConfiguration,
  input: ListFoldersCommandInput,
  ...additionalArguments: any
): Paginator<ListFoldersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFoldersCommandOutput;
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
