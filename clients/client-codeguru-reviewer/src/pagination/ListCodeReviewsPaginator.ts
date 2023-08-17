// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "../commands/ListCodeReviewsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListCodeReviewsCommandInput,
  ...args: any
): Promise<ListCodeReviewsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCodeReviewsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCodeReviews(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListCodeReviewsCommandInput,
  ...additionalArguments: any
): Paginator<ListCodeReviewsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCodeReviewsCommandOutput;
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
