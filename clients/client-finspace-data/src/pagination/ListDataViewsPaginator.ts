// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDataViewsCommand,
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput,
} from "../commands/ListDataViewsCommand";
import { FinspaceData } from "../FinspaceData";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: FinspaceData,
  input: ListDataViewsCommandInput,
  ...args: any
): Promise<ListDataViewsCommandOutput> => {
  // @ts-ignore
  return await client.listDataViews(input, ...args);
};
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
    if (config.client instanceof FinspaceData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FinspaceDataClient) {
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
