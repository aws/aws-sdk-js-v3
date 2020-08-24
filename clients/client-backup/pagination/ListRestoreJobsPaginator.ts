import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
} from "../commands/ListRestoreJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRestoreJobsCommandInput,
  ...args: any
): Promise<ListRestoreJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRestoreJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListRestoreJobsCommandInput,
  ...args: any
): Promise<ListRestoreJobsCommandOutput> => {
  // @ts-ignore
  return await client.listRestoreJobs(input, ...args);
};
export async function* listRestoreJobsPaginate(
  config: BackupPaginationConfiguration,
  input: ListRestoreJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListRestoreJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRestoreJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
