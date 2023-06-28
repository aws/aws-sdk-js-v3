// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDataViewsCommand,
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput,
} from "../commands/ListDataViewsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FinspaceDataClient,
  input: ListDataViewsCommandInput,
  ...args: any
): Promise<ListDataViewsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataViewsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataViews(
  config: FinspaceDataPaginationConfiguration,
  input: ListDataViewsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataViewsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataViewsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FinspaceDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FinspaceData | FinspaceDataClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
