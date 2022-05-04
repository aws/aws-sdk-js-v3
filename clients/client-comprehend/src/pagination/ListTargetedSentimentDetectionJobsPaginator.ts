// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTargetedSentimentDetectionJobsCommand,
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "../commands/ListTargetedSentimentDetectionJobsCommand";
import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListTargetedSentimentDetectionJobsCommandInput,
  ...args: any
): Promise<ListTargetedSentimentDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetedSentimentDetectionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Comprehend,
  input: ListTargetedSentimentDetectionJobsCommandInput,
  ...args: any
): Promise<ListTargetedSentimentDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTargetedSentimentDetectionJobs(input, ...args);
};
export async function* paginateListTargetedSentimentDetectionJobs(
  config: ComprehendPaginationConfiguration,
  input: ListTargetedSentimentDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetedSentimentDetectionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetedSentimentDetectionJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
