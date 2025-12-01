// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSourceSyncJobs: (
  config: KendraPaginationConfiguration,
  input: ListDataSourceSyncJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourceSyncJobsCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput
>(KendraClient, ListDataSourceSyncJobsCommand, "NextToken", "NextToken", "MaxResults");
