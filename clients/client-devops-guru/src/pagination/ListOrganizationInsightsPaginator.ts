// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOrganizationInsightsCommand,
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
} from "../commands/ListOrganizationInsightsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: ListOrganizationInsightsCommandInput,
  ...args: any
): Promise<ListOrganizationInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationInsightsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOrganizationInsights(
  config: DevOpsGuruPaginationConfiguration,
  input: ListOrganizationInsightsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationInsightsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DevOpsGuruClient) {
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
