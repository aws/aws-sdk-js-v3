// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTargetedSentimentDetectionJobsCommand,
  ListTargetedSentimentDetectionJobsCommandInput,
  ListTargetedSentimentDetectionJobsCommandOutput,
} from "../commands/ListTargetedSentimentDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ComprehendClient) {
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
