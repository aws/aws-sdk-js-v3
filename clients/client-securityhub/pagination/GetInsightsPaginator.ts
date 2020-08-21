import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import { GetInsightsCommand, GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetInsightsCommandInput,
  ...args: any
): Promise<GetInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInsightsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecurityHub,
  input: GetInsightsCommandInput,
  ...args: any
): Promise<GetInsightsCommandOutput> => {
  // @ts-ignore
  return await client.getInsights(input, ...args);
};
export async function* getInsightsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: GetInsightsCommandInput,
  ...additionalArguments: any
): Paginator<GetInsightsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetInsightsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
