// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListCopyJobsCommand,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput,
} from "../commands/ListCopyJobsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCopyJobs: (
  config: BackupPaginationConfiguration,
  input: ListCopyJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCopyJobsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput
>(BackupClient, ListCopyJobsCommand, "NextToken", "NextToken", "MaxResults");
