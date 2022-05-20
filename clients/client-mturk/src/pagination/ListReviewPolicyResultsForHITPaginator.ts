// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReviewPolicyResultsForHITCommand,
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "../commands/ListReviewPolicyResultsForHITCommand";
import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...args: any
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReviewPolicyResultsForHITCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...args: any
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  // @ts-ignore
  return await client.listReviewPolicyResultsForHIT(input, ...args);
};
export async function* paginateListReviewPolicyResultsForHIT(
  config: MTurkPaginationConfiguration,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...additionalArguments: any
): Paginator<ListReviewPolicyResultsForHITCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReviewPolicyResultsForHITCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
