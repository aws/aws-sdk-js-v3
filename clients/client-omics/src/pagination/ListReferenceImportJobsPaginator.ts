// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReferenceImportJobsCommand,
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "../commands/ListReferenceImportJobsCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReferenceImportJobsCommandInput,
  ...args: any
): Promise<ListReferenceImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReferenceImportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListReferenceImportJobsCommandInput,
  ...args: any
): Promise<ListReferenceImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listReferenceImportJobs(input, ...args);
};
export async function* paginateListReferenceImportJobs(
  config: OmicsPaginationConfiguration,
  input: ListReferenceImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListReferenceImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReferenceImportJobsCommandOutput;
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
