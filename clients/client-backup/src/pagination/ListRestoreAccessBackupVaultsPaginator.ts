// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreAccessBackupVaultsCommand,
  ListRestoreAccessBackupVaultsCommandInput,
  ListRestoreAccessBackupVaultsCommandOutput,
} from "../commands/ListRestoreAccessBackupVaultsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRestoreAccessBackupVaults: (
  config: BackupPaginationConfiguration,
  input: ListRestoreAccessBackupVaultsCommandInput,
  ...rest: any[]
) => Paginator<ListRestoreAccessBackupVaultsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRestoreAccessBackupVaultsCommandInput,
  ListRestoreAccessBackupVaultsCommandOutput
>(BackupClient, ListRestoreAccessBackupVaultsCommand, "NextToken", "NextToken", "MaxResults");
