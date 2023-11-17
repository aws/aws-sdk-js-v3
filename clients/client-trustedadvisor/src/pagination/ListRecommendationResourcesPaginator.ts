// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRecommendationResourcesCommand,
  ListRecommendationResourcesCommandInput,
  ListRecommendationResourcesCommandOutput,
} from "../commands/ListRecommendationResourcesCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TrustedAdvisorClient,
  input: ListRecommendationResourcesCommandInput,
  ...args: any
): Promise<ListRecommendationResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommendationResources(
  config: TrustedAdvisorPaginationConfiguration,
  input: ListRecommendationResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationResourcesCommandOutput;
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
