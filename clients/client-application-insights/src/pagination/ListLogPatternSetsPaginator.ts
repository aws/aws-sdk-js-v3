// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ApplicationInsights } from "../ApplicationInsights";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListLogPatternSetsCommand,
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput,
} from "../commands/ListLogPatternSetsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListLogPatternSetsCommandInput,
  ...args: any
): Promise<ListLogPatternSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLogPatternSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ApplicationInsights,
  input: ListLogPatternSetsCommandInput,
  ...args: any
): Promise<ListLogPatternSetsCommandOutput> => {
  // @ts-ignore
  return await client.listLogPatternSets(input, ...args);
};
export async function* paginateListLogPatternSets(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListLogPatternSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLogPatternSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsights) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationInsightsClient) {
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
