import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListReportJobsCommand,
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput,
} from "../commands/ListReportJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListReportJobsCommandInput,
  ...args: any
): Promise<ListReportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListReportJobsCommandInput,
  ...args: any
): Promise<ListReportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listReportJobs(input, ...args);
};
export async function* paginateListReportJobs(
  config: BackupPaginationConfiguration,
  input: ListReportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListReportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReportJobsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
