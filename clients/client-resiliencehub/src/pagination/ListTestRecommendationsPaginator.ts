// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTestRecommendationsCommand,
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "../commands/ListTestRecommendationsCommand";
import { Resiliencehub } from "../Resiliencehub";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListTestRecommendationsCommandInput,
  ...args: any
): Promise<ListTestRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestRecommendationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Resiliencehub,
  input: ListTestRecommendationsCommandInput,
  ...args: any
): Promise<ListTestRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.listTestRecommendations(input, ...args);
};
export async function* paginateListTestRecommendations(
  config: ResiliencehubPaginationConfiguration,
  input: ListTestRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestRecommendationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Resiliencehub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResiliencehubClient) {
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
