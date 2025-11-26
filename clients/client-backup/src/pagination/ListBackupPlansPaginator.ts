// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupPlansCommand,
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
} from "../commands/ListBackupPlansCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupPlans: (
  config: BackupPaginationConfiguration,
  input: ListBackupPlansCommandInput,
  ...rest: any[]
) => Paginator<ListBackupPlansCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput
>(BackupClient, ListBackupPlansCommand, "NextToken", "NextToken", "MaxResults");
