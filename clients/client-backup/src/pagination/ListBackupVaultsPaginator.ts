// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupVaultsCommand,
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput,
} from "../commands/ListBackupVaultsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupVaults: (
  config: BackupPaginationConfiguration,
  input: ListBackupVaultsCommandInput,
  ...rest: any[]
) => Paginator<ListBackupVaultsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput
>(BackupClient, ListBackupVaultsCommand, "NextToken", "NextToken", "MaxResults");
