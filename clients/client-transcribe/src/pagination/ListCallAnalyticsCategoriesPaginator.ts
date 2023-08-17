// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
} from "../commands/ListCallAnalyticsCategoriesCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListCallAnalyticsCategoriesCommandInput,
  ...args: any
): Promise<ListCallAnalyticsCategoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCallAnalyticsCategoriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCallAnalyticsCategories(
  config: TranscribePaginationConfiguration,
  input: ListCallAnalyticsCategoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListCallAnalyticsCategoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCallAnalyticsCategoriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
