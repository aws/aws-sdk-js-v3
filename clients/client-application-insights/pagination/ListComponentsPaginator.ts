import { ApplicationInsights } from "../ApplicationInsights";
import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "../commands/ListComponentsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ApplicationInsightsClient,
  input: ListComponentsCommandInput,
  ...args: any
): Promise<ListComponentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComponentsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ApplicationInsights,
  input: ListComponentsCommandInput,
  ...args: any
): Promise<ListComponentsCommandOutput> => {
  // @ts-ignore
  return await client.listComponents(input, ...args);
};
export async function* listComponentsPaginate(
  config: ApplicationInsightsPaginationConfiguration,
  input: ListComponentsCommandInput,
  ...additionalArguments: any
): Paginator<ListComponentsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListComponentsCommandOutput;
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
