// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupPlanVersions: (
  config: BackupPaginationConfiguration,
  input: ListBackupPlanVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListBackupPlanVersionsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput
>(BackupClient, ListBackupPlanVersionsCommand, "NextToken", "NextToken", "MaxResults");
