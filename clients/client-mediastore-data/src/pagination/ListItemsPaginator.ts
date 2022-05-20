// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListItemsCommand, ListItemsCommandInput, ListItemsCommandOutput } from "../commands/ListItemsCommand";
import { MediaStoreData } from "../MediaStoreData";
import { MediaStoreDataClient } from "../MediaStoreDataClient";
import { MediaStoreDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: MediaStoreData,
  input: ListItemsCommandInput,
  ...args: any
): Promise<ListItemsCommandOutput> => {
  // @ts-ignore
  return await client.listItems(input, ...args);
};
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
    if (config.client instanceof MediaStoreData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaStoreDataClient) {
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
