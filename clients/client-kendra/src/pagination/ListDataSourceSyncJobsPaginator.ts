// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListDataSourceSyncJobsCommandInput,
  ...args: any
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourceSyncJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataSourceSyncJobs(
  config: KendraPaginationConfiguration,
  input: ListDataSourceSyncJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourceSyncJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourceSyncJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
