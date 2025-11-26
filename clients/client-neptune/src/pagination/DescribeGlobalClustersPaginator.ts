// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeGlobalClusters: (
  config: NeptunePaginationConfiguration,
  input: DescribeGlobalClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeGlobalClustersCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput
>(NeptuneClient, DescribeGlobalClustersCommand, "Marker", "Marker", "MaxRecords");
