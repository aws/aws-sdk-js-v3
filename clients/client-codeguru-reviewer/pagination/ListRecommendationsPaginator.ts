import { CodeGuruReviewer } from "../CodeGuruReviewer";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListRecommendationsCommandInput,
  ...args: any
): Promise<ListRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeGuruReviewer,
  input: ListRecommendationsCommandInput,
  ...args: any
): Promise<ListRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.listRecommendations(input, ...args);
};
export async function* listRecommendationsPaginate(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendationsCommandOutput;
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
