// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "../commands/ListRecommendationFeedbackCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListRecommendationFeedbackCommandInput,
  ...args: any
): Promise<ListRecommendationFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationFeedbackCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommendationFeedback(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationFeedbackCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationFeedbackCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationFeedbackCommandOutput;
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
