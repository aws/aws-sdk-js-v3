// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDominantLanguageDetectionJobsCommand,
  ListDominantLanguageDetectionJobsCommandInput,
  ListDominantLanguageDetectionJobsCommandOutput,
} from "../commands/ListDominantLanguageDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListDominantLanguageDetectionJobsCommandInput,
  ...args: any
): Promise<ListDominantLanguageDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDominantLanguageDetectionJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDominantLanguageDetectionJobs(
  config: ComprehendPaginationConfiguration,
  input: ListDominantLanguageDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDominantLanguageDetectionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDominantLanguageDetectionJobsCommandOutput;
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
