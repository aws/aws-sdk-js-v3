// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOrganizationRecommendationAccountsCommand,
  ListOrganizationRecommendationAccountsCommandInput,
  ListOrganizationRecommendationAccountsCommandOutput,
} from "../commands/ListOrganizationRecommendationAccountsCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TrustedAdvisorClient,
  input: ListOrganizationRecommendationAccountsCommandInput,
  ...args: any
): Promise<ListOrganizationRecommendationAccountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationRecommendationAccountsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOrganizationRecommendationAccounts(
  config: TrustedAdvisorPaginationConfiguration,
  input: ListOrganizationRecommendationAccountsCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationRecommendationAccountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationRecommendationAccountsCommandOutput;
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
