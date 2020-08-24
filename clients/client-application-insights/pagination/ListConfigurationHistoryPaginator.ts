import { ApplicationInsights } from "../ApplicationInsights";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListConfigurationHistoryCommand,
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
} from "../commands/ListConfigurationHistoryCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListConfigurationHistoryCommandInput,
  ...args: any
): Promise<ListConfigurationHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationHistoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: ApplicationInsights,
  input: ListConfigurationHistoryCommandInput,
  ...args: any
): Promise<ListConfigurationHistoryCommandOutput> => {
  // @ts-ignore
  return await client.listConfigurationHistory(input, ...args);
};
export async function* listConfigurationHistoryPaginate(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListConfigurationHistoryCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListConfigurationHistoryCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ApplicationInsights) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationInsightsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationInsights | ApplicationInsightsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
