import { CodeGuruReviewer } from "../CodeGuruReviewer";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "../commands/ListCodeReviewsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListCodeReviewsCommandInput,
  ...args: any
): Promise<ListCodeReviewsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCodeReviewsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeGuruReviewer,
  input: ListCodeReviewsCommandInput,
  ...args: any
): Promise<ListCodeReviewsCommandOutput> => {
  // @ts-ignore
  return await client.listCodeReviews(input, ...args);
};
export async function* listCodeReviewsPaginate(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListCodeReviewsCommandInput,
  ...additionalArguments: any
): Paginator<ListCodeReviewsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCodeReviewsCommandOutput;
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
