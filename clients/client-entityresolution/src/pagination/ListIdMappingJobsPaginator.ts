// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIdMappingJobsCommand,
  ListIdMappingJobsCommandInput,
  ListIdMappingJobsCommandOutput,
} from "../commands/ListIdMappingJobsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EntityResolutionClient,
  input: ListIdMappingJobsCommandInput,
  ...args: any
): Promise<ListIdMappingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdMappingJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIdMappingJobs(
  config: EntityResolutionPaginationConfiguration,
  input: ListIdMappingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListIdMappingJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdMappingJobsCommandOutput;
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
