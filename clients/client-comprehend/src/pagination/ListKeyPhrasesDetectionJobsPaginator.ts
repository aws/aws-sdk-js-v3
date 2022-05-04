// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListKeyPhrasesDetectionJobsCommand,
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "../commands/ListKeyPhrasesDetectionJobsCommand";
import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...args: any
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyPhrasesDetectionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Comprehend,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...args: any
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listKeyPhrasesDetectionJobs(input, ...args);
};
export async function* paginateListKeyPhrasesDetectionJobs(
  config: ComprehendPaginationConfiguration,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyPhrasesDetectionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeyPhrasesDetectionJobsCommandOutput;
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
