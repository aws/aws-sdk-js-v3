// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListAudienceGenerationJobsCommand,
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
} from "../commands/ListAudienceGenerationJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsMLClient,
  input: ListAudienceGenerationJobsCommandInput,
  ...args: any
): Promise<ListAudienceGenerationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAudienceGenerationJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAudienceGenerationJobs(
  config: CleanRoomsMLPaginationConfiguration,
  input: ListAudienceGenerationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListAudienceGenerationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAudienceGenerationJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CleanRoomsMLClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CleanRoomsML | CleanRoomsMLClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
