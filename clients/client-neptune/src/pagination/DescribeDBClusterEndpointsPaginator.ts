// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "../commands/DescribeDBClusterEndpointsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterEndpoints: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBClusterEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterEndpointsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput
>(NeptuneClient, DescribeDBClusterEndpointsCommand, "Marker", "Marker", "MaxRecords");
