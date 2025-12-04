// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "../commands/DescribeDBClustersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusters: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClustersCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput
>(RDSClient, DescribeDBClustersCommand, "Marker", "Marker", "MaxRecords");
