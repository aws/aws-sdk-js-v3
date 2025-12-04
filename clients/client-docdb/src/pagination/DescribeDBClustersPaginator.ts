// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "../commands/DescribeDBClustersCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusters: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClustersCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput
>(DocDBClient, DescribeDBClustersCommand, "Marker", "Marker", "MaxRecords");
