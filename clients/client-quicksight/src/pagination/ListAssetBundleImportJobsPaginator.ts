// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssetBundleImportJobsCommand,
  ListAssetBundleImportJobsCommandInput,
  ListAssetBundleImportJobsCommandOutput,
} from "../commands/ListAssetBundleImportJobsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListAssetBundleImportJobsCommandInput,
  ...args: any
): Promise<ListAssetBundleImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetBundleImportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssetBundleImportJobs(
  config: QuickSightPaginationConfiguration,
  input: ListAssetBundleImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetBundleImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetBundleImportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
