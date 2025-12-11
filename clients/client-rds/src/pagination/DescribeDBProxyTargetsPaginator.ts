// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBProxyTargetsCommand,
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
} from "../commands/DescribeDBProxyTargetsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBProxyTargets: (
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBProxyTargetsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput
>(RDSClient, DescribeDBProxyTargetsCommand, "Marker", "Marker", "MaxRecords");
