// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRescoreExecutionPlansCommand,
  ListRescoreExecutionPlansCommandInput,
  ListRescoreExecutionPlansCommandOutput,
} from "../commands/ListRescoreExecutionPlansCommand";
import { KendraRankingClient } from "../KendraRankingClient";
import { KendraRankingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof KendraRankingClient) {
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
