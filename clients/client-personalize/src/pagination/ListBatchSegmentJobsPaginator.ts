// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListBatchSegmentJobsCommand,
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
} from "../commands/ListBatchSegmentJobsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListBatchSegmentJobsCommandInput,
  ...args: any
): Promise<ListBatchSegmentJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBatchSegmentJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBatchSegmentJobs(
  config: PersonalizePaginationConfiguration,
  input: ListBatchSegmentJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListBatchSegmentJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBatchSegmentJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
