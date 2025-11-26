// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "../commands/DescribeDBClustersCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusters: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClustersCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput
>(NeptuneClient, DescribeDBClustersCommand, "Marker", "Marker", "MaxRecords");
