// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGlobalClusters: (
  config: RDSPaginationConfiguration,
  input: DescribeGlobalClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeGlobalClustersCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput
>(RDSClient, DescribeGlobalClustersCommand, "Marker", "Marker", "MaxRecords");
