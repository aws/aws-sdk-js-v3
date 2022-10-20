// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAppComponentRecommendationsCommand,
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "../commands/ListAppComponentRecommendationsCommand";
import { Resiliencehub } from "../Resiliencehub";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListAppComponentRecommendationsCommandInput,
  ...args: any
): Promise<ListAppComponentRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppComponentRecommendationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Resiliencehub,
  input: ListAppComponentRecommendationsCommandInput,
  ...args: any
): Promise<ListAppComponentRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.listAppComponentRecommendations(input, ...args);
};
export async function* paginateListAppComponentRecommendations(
  config: ResiliencehubPaginationConfiguration,
  input: ListAppComponentRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppComponentRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppComponentRecommendationsCommandOutput;
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
