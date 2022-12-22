// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReadSetImportJobsCommand,
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "../commands/ListReadSetImportJobsCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReadSetImportJobsCommandInput,
  ...args: any
): Promise<ListReadSetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReadSetImportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListReadSetImportJobsCommandInput,
  ...args: any
): Promise<ListReadSetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listReadSetImportJobs(input, ...args);
};
export async function* paginateListReadSetImportJobs(
  config: OmicsPaginationConfiguration,
  input: ListReadSetImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListReadSetImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReadSetImportJobsCommandOutput;
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
