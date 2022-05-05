// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ApplicationInsights } from "../ApplicationInsights";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListComponentsCommandInput,
  ...args: any
): Promise<ListComponentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComponentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ApplicationInsights,
  input: ListComponentsCommandInput,
  ...args: any
): Promise<ListComponentsCommandOutput> => {
  // @ts-ignore
  return await client.listComponents(input, ...args);
};
export async function* paginateListComponents(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListComponentsCommandInput,
  ...additionalArguments: any
): Paginator<ListComponentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComponentsCommandOutput;
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
