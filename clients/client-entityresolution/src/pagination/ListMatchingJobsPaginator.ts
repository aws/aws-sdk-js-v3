// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListMatchingJobsCommand,
  ListMatchingJobsCommandInput,
  ListMatchingJobsCommandOutput,
} from "../commands/ListMatchingJobsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EntityResolutionClient,
  input: ListMatchingJobsCommandInput,
  ...args: any
): Promise<ListMatchingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMatchingJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMatchingJobs(
  config: EntityResolutionPaginationConfiguration,
  input: ListMatchingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListMatchingJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMatchingJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EntityResolutionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EntityResolution | EntityResolutionClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
