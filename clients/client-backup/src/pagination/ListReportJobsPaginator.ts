// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListReportJobsCommand,
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput,
} from "../commands/ListReportJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReportJobs: (
  config: BackupPaginationConfiguration,
  input: ListReportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListReportJobsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput
>(BackupClient, ListReportJobsCommand, "NextToken", "NextToken", "MaxResults");
