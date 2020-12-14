import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupPlanVersionsCommandInput,
  ...args: any
): Promise<ListBackupPlanVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupPlanVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListBackupPlanVersionsCommandInput,
  ...args: any
): Promise<ListBackupPlanVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listBackupPlanVersions(input, ...args);
};
export async function* paginateListBackupPlanVersions(
  config: BackupPaginationConfiguration,
  input: ListBackupPlanVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlanVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupPlanVersionsCommandOutput;
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
