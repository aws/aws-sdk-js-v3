// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupAccessPointsByRecoveryPointCommand,
  ListBackupAccessPointsByRecoveryPointCommandInput,
  ListBackupAccessPointsByRecoveryPointCommandOutput,
} from "../commands/ListBackupAccessPointsByRecoveryPointCommand";
import type { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupAccessPointsByRecoveryPoint: (
  config: BackupPaginationConfiguration,
  input: ListBackupAccessPointsByRecoveryPointCommandInput,
  ...rest: any[]
) => Paginator<ListBackupAccessPointsByRecoveryPointCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupAccessPointsByRecoveryPointCommandInput,
  ListBackupAccessPointsByRecoveryPointCommandOutput
>(BackupClient, ListBackupAccessPointsByRecoveryPointCommand, "NextToken", "NextToken", "MaxResults");
