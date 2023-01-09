// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRescoreExecutionPlansCommand,
  ListRescoreExecutionPlansCommandInput,
  ListRescoreExecutionPlansCommandOutput,
} from "../commands/ListRescoreExecutionPlansCommand";
import { KendraRanking } from "../KendraRanking";
import { KendraRankingClient } from "../KendraRankingClient";
import { KendraRankingPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KendraRankingClient,
  input: ListRescoreExecutionPlansCommandInput,
  ...args: any
): Promise<ListRescoreExecutionPlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRescoreExecutionPlansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KendraRanking,
  input: ListRescoreExecutionPlansCommandInput,
  ...args: any
): Promise<ListRescoreExecutionPlansCommandOutput> => {
  // @ts-ignore
  return await client.listRescoreExecutionPlans(input, ...args);
};
export async function* paginateListRescoreExecutionPlans(
  config: KendraRankingPaginationConfiguration,
  input: ListRescoreExecutionPlansCommandInput,
  ...additionalArguments: any
): Paginator<ListRescoreExecutionPlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRescoreExecutionPlansCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KendraRanking) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraRankingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KendraRanking | KendraRankingClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
