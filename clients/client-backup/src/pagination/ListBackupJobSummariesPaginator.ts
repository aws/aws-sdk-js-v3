// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupJobSummariesCommand,
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
} from "../commands/ListBackupJobSummariesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupJobSummaries: (
  config: BackupPaginationConfiguration,
  input: ListBackupJobSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListBackupJobSummariesCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput
>(BackupClient, ListBackupJobSummariesCommand, "NextToken", "NextToken", "MaxResults");
