// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
} from "../commands/DescribeDBProxyEndpointsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBProxyEndpoints: (
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBProxyEndpointsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput
>(RDSClient, DescribeDBProxyEndpointsCommand, "Marker", "Marker", "MaxRecords");
