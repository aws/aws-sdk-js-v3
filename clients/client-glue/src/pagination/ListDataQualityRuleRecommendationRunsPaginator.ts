// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRuleRecommendationRunsCommandInput,
  ListDataQualityRuleRecommendationRunsCommandOutput,
} from "../commands/ListDataQualityRuleRecommendationRunsCommand";
import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: ListDataQualityRuleRecommendationRunsCommandInput,
  ...args: any
): Promise<ListDataQualityRuleRecommendationRunsCommandOutput> => {
  // @ts-ignore
  return await client.listDataQualityRuleRecommendationRuns(input, ...args);
};
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
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
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
