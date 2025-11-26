// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMultiRegionClustersCommand,
  DescribeMultiRegionClustersCommandInput,
  DescribeMultiRegionClustersCommandOutput,
} from "../commands/DescribeMultiRegionClustersCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMultiRegionClusters: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeMultiRegionClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeMultiRegionClustersCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeMultiRegionClustersCommandInput,
  DescribeMultiRegionClustersCommandOutput
>(MemoryDBClient, DescribeMultiRegionClustersCommand, "NextToken", "NextToken", "MaxResults");
