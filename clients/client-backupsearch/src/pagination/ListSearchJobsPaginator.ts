// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupSearchClient } from "../BackupSearchClient";
import {
  ListSearchJobsCommand,
  ListSearchJobsCommandInput,
  ListSearchJobsCommandOutput,
} from "../commands/ListSearchJobsCommand";
import { BackupSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSearchJobs: (
  config: BackupSearchPaginationConfiguration,
  input: ListSearchJobsCommandInput,
  ...rest: any[]
) => Paginator<ListSearchJobsCommandOutput> = createPaginator<
  BackupSearchPaginationConfiguration,
  ListSearchJobsCommandInput,
  ListSearchJobsCommandOutput
>(BackupSearchClient, ListSearchJobsCommand, "NextToken", "NextToken", "MaxResults");
