// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorldExportJobsCommand,
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "../commands/ListWorldExportJobsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldExportJobsCommandInput,
  ...args: any
): Promise<ListWorldExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldExportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorldExportJobs(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldExportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
