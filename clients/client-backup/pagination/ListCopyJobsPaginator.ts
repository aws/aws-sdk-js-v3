import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListCopyJobsCommand,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput,
} from "../commands/ListCopyJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListCopyJobsCommandInput,
  ...args: any
): Promise<ListCopyJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCopyJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Backup,
  input: ListCopyJobsCommandInput,
  ...args: any
): Promise<ListCopyJobsCommandOutput> => {
  // @ts-ignore
  return await client.listCopyJobs(input, ...args);
};
export async function* listCopyJobsPaginate(
  config: BackupPaginationConfiguration,
  input: ListCopyJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListCopyJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCopyJobsCommandOutput;
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
