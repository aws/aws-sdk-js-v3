// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDiscoveryJobsCommand,
  ListDiscoveryJobsCommandInput,
  ListDiscoveryJobsCommandOutput,
} from "../commands/ListDiscoveryJobsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataSyncClient,
  input: ListDiscoveryJobsCommandInput,
  ...args: any
): Promise<ListDiscoveryJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDiscoveryJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDiscoveryJobs(
  config: DataSyncPaginationConfiguration,
  input: ListDiscoveryJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDiscoveryJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDiscoveryJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataSyncClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataSync | DataSyncClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
