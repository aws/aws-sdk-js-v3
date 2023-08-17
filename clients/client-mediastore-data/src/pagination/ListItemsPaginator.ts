// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListItemsCommand, ListItemsCommandInput, ListItemsCommandOutput } from "../commands/ListItemsCommand";
import { MediaStoreDataClient } from "../MediaStoreDataClient";
import { MediaStoreDataPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaStoreDataClient,
  input: ListItemsCommandInput,
  ...args: any
): Promise<ListItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListItemsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListItems(
  config: MediaStoreDataPaginationConfiguration,
  input: ListItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListItemsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaStoreDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaStoreData | MediaStoreDataClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
