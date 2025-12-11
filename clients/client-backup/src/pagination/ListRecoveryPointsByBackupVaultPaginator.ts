// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "../commands/ListRecoveryPointsByBackupVaultCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecoveryPointsByBackupVault: (
  config: BackupPaginationConfiguration,
  input: ListRecoveryPointsByBackupVaultCommandInput,
  ...rest: any[]
) => Paginator<ListRecoveryPointsByBackupVaultCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput
>(BackupClient, ListRecoveryPointsByBackupVaultCommand, "NextToken", "NextToken", "MaxResults");
