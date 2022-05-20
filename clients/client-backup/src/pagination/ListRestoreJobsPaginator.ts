// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
} from "../commands/ListRestoreJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRestoreJobsCommandInput,
  ...args: any
): Promise<ListRestoreJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRestoreJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListRestoreJobsCommandInput,
  ...args: any
): Promise<ListRestoreJobsCommandOutput> => {
  // @ts-ignore
  return await client.listRestoreJobs(input, ...args);
};
export async function* paginateListRestoreJobs(
  config: BackupPaginationConfiguration,
  input: ListRestoreJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListRestoreJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRestoreJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
