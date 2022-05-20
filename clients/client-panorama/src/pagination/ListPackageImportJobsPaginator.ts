// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPackageImportJobsCommand,
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput,
} from "../commands/ListPackageImportJobsCommand";
import { Panorama } from "../Panorama";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListPackageImportJobsCommandInput,
  ...args: any
): Promise<ListPackageImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackageImportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Panorama,
  input: ListPackageImportJobsCommandInput,
  ...args: any
): Promise<ListPackageImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listPackageImportJobs(input, ...args);
};
export async function* paginateListPackageImportJobs(
  config: PanoramaPaginationConfiguration,
  input: ListPackageImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackageImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackageImportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Panorama) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PanoramaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Panorama | PanoramaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
