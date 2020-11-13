import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListBackupJobsCommand,
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
} from "../commands/ListBackupJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupJobsCommandInput,
  ...args: any
): Promise<ListBackupJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Backup,
  input: ListBackupJobsCommandInput,
  ...args: any
): Promise<ListBackupJobsCommandOutput> => {
  // @ts-ignore
  return await client.listBackupJobs(input, ...args);
};
export async function* listBackupJobsPaginate(
  config: BackupPaginationConfiguration,
  input: ListBackupJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupJobsCommandOutput;
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
