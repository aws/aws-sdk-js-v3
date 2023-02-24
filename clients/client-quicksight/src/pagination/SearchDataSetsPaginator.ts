// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchDataSetsCommand,
  SearchDataSetsCommandInput,
  SearchDataSetsCommandOutput,
} from "../commands/SearchDataSetsCommand";
import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchDataSetsCommandInput,
  ...args: any
): Promise<SearchDataSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchDataSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: SearchDataSetsCommandInput,
  ...args: any
): Promise<SearchDataSetsCommandOutput> => {
  // @ts-ignore
  return await client.searchDataSets(input, ...args);
};
export async function* paginateSearchDataSets(
  config: QuickSightPaginationConfiguration,
  input: SearchDataSetsCommandInput,
  ...additionalArguments: any
): Paginator<SearchDataSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchDataSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
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
