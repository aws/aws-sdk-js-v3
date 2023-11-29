// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListAudienceExportJobsCommand,
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput,
} from "../commands/ListAudienceExportJobsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsMLClient,
  input: ListAudienceExportJobsCommandInput,
  ...args: any
): Promise<ListAudienceExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAudienceExportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAudienceExportJobs(
  config: CleanRoomsMLPaginationConfiguration,
  input: ListAudienceExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListAudienceExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAudienceExportJobsCommandOutput;
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
