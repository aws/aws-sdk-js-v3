// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupAccessPointsCommand,
  ListBackupAccessPointsCommandInput,
  ListBackupAccessPointsCommandOutput,
} from "../commands/ListBackupAccessPointsCommand";
import type { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupAccessPoints: (
  config: BackupPaginationConfiguration,
  input: ListBackupAccessPointsCommandInput,
  ...rest: any[]
) => Paginator<ListBackupAccessPointsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupAccessPointsCommandInput,
  ListBackupAccessPointsCommandOutput
>(BackupClient, ListBackupAccessPointsCommand, "NextToken", "NextToken", "MaxResults");
