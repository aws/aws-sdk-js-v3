// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSopRecommendationsCommand,
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "../commands/ListSopRecommendationsCommand";
import { Resiliencehub } from "../Resiliencehub";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListSopRecommendationsCommandInput,
  ...args: any
): Promise<ListSopRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSopRecommendationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Resiliencehub,
  input: ListSopRecommendationsCommandInput,
  ...args: any
): Promise<ListSopRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.listSopRecommendations(input, ...args);
};
export async function* paginateListSopRecommendations(
  config: ResiliencehubPaginationConfiguration,
  input: ListSopRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSopRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSopRecommendationsCommandOutput;
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
