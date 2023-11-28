// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QBusinessClient,
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
  config: QBusinessPaginationConfiguration,
  input: ListDataSourceSyncJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourceSyncJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourceSyncJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof QBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QBusiness | QBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
