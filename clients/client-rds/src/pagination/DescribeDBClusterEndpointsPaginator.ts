// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "../commands/DescribeDBClusterEndpointsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterEndpoints: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterEndpointsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput
>(RDSClient, DescribeDBClusterEndpointsCommand, "Marker", "Marker", "MaxRecords");
