// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BackupSearchClient } from "../BackupSearchClient";
import {
  ListSearchResultExportJobsCommand,
  ListSearchResultExportJobsCommandInput,
  ListSearchResultExportJobsCommandOutput,
} from "../commands/ListSearchResultExportJobsCommand";
import { BackupSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSearchResultExportJobs: (
  config: BackupSearchPaginationConfiguration,
  input: ListSearchResultExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSearchResultExportJobsCommandOutput> = createPaginator<
  BackupSearchPaginationConfiguration,
  ListSearchResultExportJobsCommandInput,
  ListSearchResultExportJobsCommandOutput
>(BackupSearchClient, ListSearchResultExportJobsCommand, "NextToken", "NextToken", "MaxResults");
