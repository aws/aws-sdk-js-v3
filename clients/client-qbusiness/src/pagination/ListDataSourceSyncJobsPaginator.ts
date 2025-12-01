// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSourceSyncJobs: (
  config: QBusinessPaginationConfiguration,
  input: ListDataSourceSyncJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourceSyncJobsCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput
>(QBusinessClient, ListDataSourceSyncJobsCommand, "nextToken", "nextToken", "maxResults");
