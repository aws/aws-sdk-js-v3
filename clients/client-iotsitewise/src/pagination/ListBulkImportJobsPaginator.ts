// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBulkImportJobsCommand,
  ListBulkImportJobsCommandInput,
  ListBulkImportJobsCommandOutput,
} from "../commands/ListBulkImportJobsCommand";
import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListBulkImportJobsCommandInput,
  ...args: any
): Promise<ListBulkImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBulkImportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListBulkImportJobsCommandInput,
  ...args: any
): Promise<ListBulkImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listBulkImportJobs(input, ...args);
};
export async function* paginateListBulkImportJobs(
  config: IoTSiteWisePaginationConfiguration,
  input: ListBulkImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListBulkImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBulkImportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
