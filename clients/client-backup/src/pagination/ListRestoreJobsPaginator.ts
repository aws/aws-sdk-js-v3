// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
} from "../commands/ListRestoreJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRestoreJobs: (
  config: BackupPaginationConfiguration,
  input: ListRestoreJobsCommandInput,
  ...rest: any[]
) => Paginator<ListRestoreJobsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput
>(BackupClient, ListRestoreJobsCommand, "NextToken", "NextToken", "MaxResults");
