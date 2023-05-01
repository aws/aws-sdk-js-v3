// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "../commands/ListDataQualityRuleRecommendationRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: ListDataQualityRuleRecommendationRunsCommandInput,
  ...args: any
): Promise<ListDataQualityRuleRecommendationRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataQualityRuleRecommendationRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataQualityRuleRecommendationRuns(
  config: GluePaginationConfiguration,
  input: ListDataQualityRuleRecommendationRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataQualityRuleRecommendationRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataQualityRuleRecommendationRunsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
