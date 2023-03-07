// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetInsightsCommand, GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetInsightsCommandInput,
  ...args: any
): Promise<GetInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInsightsCommand(input), ...args);
};
export async function* paginateGetInsights(
  config: SecurityHubPaginationConfiguration,
  input: GetInsightsCommandInput,
  ...additionalArguments: any
): Paginator<GetInsightsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
