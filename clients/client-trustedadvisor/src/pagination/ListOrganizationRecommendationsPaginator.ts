// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOrganizationRecommendationsCommand,
  ListOrganizationRecommendationsCommandInput,
  ListOrganizationRecommendationsCommandOutput,
} from "../commands/ListOrganizationRecommendationsCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TrustedAdvisorClient,
  input: ListOrganizationRecommendationsCommandInput,
  ...args: any
): Promise<ListOrganizationRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationRecommendationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOrganizationRecommendations(
  config: TrustedAdvisorPaginationConfiguration,
  input: ListOrganizationRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationRecommendationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof TrustedAdvisorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected TrustedAdvisor | TrustedAdvisorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
