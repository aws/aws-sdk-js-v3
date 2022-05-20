// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchOrganizationInsightsCommand,
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
} from "../commands/SearchOrganizationInsightsCommand";
import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: SearchOrganizationInsightsCommandInput,
  ...args: any
): Promise<SearchOrganizationInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchOrganizationInsightsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: SearchOrganizationInsightsCommandInput,
  ...args: any
): Promise<SearchOrganizationInsightsCommandOutput> => {
  // @ts-ignore
  return await client.searchOrganizationInsights(input, ...args);
};
export async function* paginateSearchOrganizationInsights(
  config: DevOpsGuruPaginationConfiguration,
  input: SearchOrganizationInsightsCommandInput,
  ...additionalArguments: any
): Paginator<SearchOrganizationInsightsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchOrganizationInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
