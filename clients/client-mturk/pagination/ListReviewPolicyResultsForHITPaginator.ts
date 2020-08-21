import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import {
  ListReviewPolicyResultsForHITCommand,
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "../commands/ListReviewPolicyResultsForHITCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...args: any
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReviewPolicyResultsForHITCommand(input, ...args));
};
const makePagedRequest = async (
  client: MTurk,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...args: any
): Promise<ListReviewPolicyResultsForHITCommandOutput> => {
  // @ts-ignore
  return await client.listReviewPolicyResultsForHIT(input, ...args);
};
export async function* listReviewPolicyResultsForHITPaginate(
  config: MTurkPaginationConfiguration,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...additionalArguments: any
): Paginator<ListReviewPolicyResultsForHITCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListReviewPolicyResultsForHITCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
