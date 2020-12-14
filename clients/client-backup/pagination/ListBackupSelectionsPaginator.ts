import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListBackupSelectionsCommand,
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "../commands/ListBackupSelectionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupSelectionsCommandInput,
  ...args: any
): Promise<ListBackupSelectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupSelectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListBackupSelectionsCommandInput,
  ...args: any
): Promise<ListBackupSelectionsCommandOutput> => {
  // @ts-ignore
  return await client.listBackupSelections(input, ...args);
};
export async function* paginateListBackupSelections(
  config: BackupPaginationConfiguration,
  input: ListBackupSelectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupSelectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupSelectionsCommandOutput;
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
