// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListRecommendationsCommandInput,
  ...args: any
): Promise<ListRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommendations(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruReviewerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruReviewer | CodeGuruReviewerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
