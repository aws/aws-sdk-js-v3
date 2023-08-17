// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListProtectedResourcesByBackupVaultCommand,
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput,
} from "../commands/ListProtectedResourcesByBackupVaultCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListProtectedResourcesByBackupVaultCommandInput,
  ...args: any
): Promise<ListProtectedResourcesByBackupVaultCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectedResourcesByBackupVaultCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProtectedResourcesByBackupVault(
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesByBackupVaultCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectedResourcesByBackupVaultCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectedResourcesByBackupVaultCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BackupClient) {
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
