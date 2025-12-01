// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListScanJobsCommand,
  ListScanJobsCommandInput,
  ListScanJobsCommandOutput,
} from "../commands/ListScanJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScanJobs: (
  config: BackupPaginationConfiguration,
  input: ListScanJobsCommandInput,
  ...rest: any[]
) => Paginator<ListScanJobsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListScanJobsCommandInput,
  ListScanJobsCommandOutput
>(BackupClient, ListScanJobsCommand, "NextToken", "NextToken", "MaxResults");
