// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAlarmRecommendationsCommand,
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "../commands/ListAlarmRecommendationsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListAlarmRecommendationsCommandInput,
  ...args: any
): Promise<ListAlarmRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAlarmRecommendationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAlarmRecommendations(
  config: ResiliencehubPaginationConfiguration,
  input: ListAlarmRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAlarmRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAlarmRecommendationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ResiliencehubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Resiliencehub | ResiliencehubClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
