import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListBackupVaultsCommand,
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput,
} from "../commands/ListBackupVaultsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupVaultsCommandInput,
  ...args: any
): Promise<ListBackupVaultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupVaultsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Backup,
  input: ListBackupVaultsCommandInput,
  ...args: any
): Promise<ListBackupVaultsCommandOutput> => {
  // @ts-ignore
  return await client.listBackupVaults(input, ...args);
};
export async function* listBackupVaultsPaginate(
  config: BackupPaginationConfiguration,
  input: ListBackupVaultsCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupVaultsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupVaultsCommandOutput;
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
