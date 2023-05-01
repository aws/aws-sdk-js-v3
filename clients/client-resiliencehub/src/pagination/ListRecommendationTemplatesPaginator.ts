// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRecommendationTemplatesCommand,
  ListRecommendationTemplatesCommandInput,
  ListRecommendationTemplatesCommandOutput,
} from "../commands/ListRecommendationTemplatesCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListRecommendationTemplatesCommandInput,
  ...args: any
): Promise<ListRecommendationTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommendationTemplates(
  config: ResiliencehubPaginationConfiguration,
  input: ListRecommendationTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationTemplatesCommandOutput;
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
