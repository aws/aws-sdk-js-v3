// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupJobsCommand,
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
} from "../commands/ListBackupJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupJobs: (
  config: BackupPaginationConfiguration,
  input: ListBackupJobsCommandInput,
  ...rest: any[]
) => Paginator<ListBackupJobsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput
>(BackupClient, ListBackupJobsCommand, "NextToken", "NextToken", "MaxResults");
