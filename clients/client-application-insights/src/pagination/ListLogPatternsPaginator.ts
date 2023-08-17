// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListLogPatternsCommand,
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput,
} from "../commands/ListLogPatternsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListLogPatternsCommandInput,
  ...args: any
): Promise<ListLogPatternsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLogPatternsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLogPatterns(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogPatternsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLogPatternsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsightsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationInsights | ApplicationInsightsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
