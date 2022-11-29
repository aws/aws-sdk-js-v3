// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReadSetExportJobsCommand,
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "../commands/ListReadSetExportJobsCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReadSetExportJobsCommandInput,
  ...args: any
): Promise<ListReadSetExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReadSetExportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListReadSetExportJobsCommandInput,
  ...args: any
): Promise<ListReadSetExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listReadSetExportJobs(input, ...args);
};
export async function* paginateListReadSetExportJobs(
  config: OmicsPaginationConfiguration,
  input: ListReadSetExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListReadSetExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReadSetExportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Omics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
