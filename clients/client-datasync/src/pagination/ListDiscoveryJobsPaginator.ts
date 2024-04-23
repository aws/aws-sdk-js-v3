// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDiscoveryJobsCommand,
  ListDiscoveryJobsCommandInput,
  ListDiscoveryJobsCommandOutput,
} from "../commands/ListDiscoveryJobsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoveryJobs: (
  config: DataSyncPaginationConfiguration,
  input: ListDiscoveryJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoveryJobsCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListDiscoveryJobsCommandInput,
  ListDiscoveryJobsCommandOutput
>(DataSyncClient, ListDiscoveryJobsCommand, "NextToken", "NextToken", "MaxResults");
