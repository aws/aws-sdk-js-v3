// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListProtectedResourcesByBackupVaultCommand,
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput,
} from "../commands/ListProtectedResourcesByBackupVaultCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectedResourcesByBackupVault: (
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesByBackupVaultCommandInput,
  ...rest: any[]
) => Paginator<ListProtectedResourcesByBackupVaultCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput
>(BackupClient, ListProtectedResourcesByBackupVaultCommand, "NextToken", "NextToken", "MaxResults");
