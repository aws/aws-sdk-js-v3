// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMailboxExportJobsCommand,
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "../commands/ListMailboxExportJobsCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMailboxExportJobs: (
  config: WorkMailPaginationConfiguration,
  input: ListMailboxExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMailboxExportJobsCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput
>(WorkMailClient, ListMailboxExportJobsCommand, "NextToken", "NextToken", "MaxResults");
