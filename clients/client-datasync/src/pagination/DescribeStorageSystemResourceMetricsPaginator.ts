// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeStorageSystemResourceMetricsCommand,
  DescribeStorageSystemResourceMetricsCommandInput,
  DescribeStorageSystemResourceMetricsCommandOutput,
} from "../commands/DescribeStorageSystemResourceMetricsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStorageSystemResourceMetrics: (
  config: DataSyncPaginationConfiguration,
  input: DescribeStorageSystemResourceMetricsCommandInput,
  ...rest: any[]
) => Paginator<DescribeStorageSystemResourceMetricsCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  DescribeStorageSystemResourceMetricsCommandInput,
  DescribeStorageSystemResourceMetricsCommandOutput
>(DataSyncClient, DescribeStorageSystemResourceMetricsCommand, "NextToken", "NextToken", "MaxResults");
