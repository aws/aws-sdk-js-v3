// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGlobalClusters: (
  config: DocDBPaginationConfiguration,
  input: DescribeGlobalClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeGlobalClustersCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput
>(DocDBClient, DescribeGlobalClustersCommand, "Marker", "Marker", "MaxRecords");
