import { CodeGuruReviewer } from "../CodeGuruReviewer";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "../commands/ListRecommendationFeedbackCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListRecommendationFeedbackCommandInput,
  ...args: any
): Promise<ListRecommendationFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationFeedbackCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeGuruReviewer,
  input: ListRecommendationFeedbackCommandInput,
  ...args: any
): Promise<ListRecommendationFeedbackCommandOutput> => {
  // @ts-ignore
  return await client.listRecommendationFeedback(input, ...args);
};
export async function* listRecommendationFeedbackPaginate(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationFeedbackCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationFeedbackCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationFeedbackCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruReviewer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruReviewerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruReviewer | CodeGuruReviewerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
