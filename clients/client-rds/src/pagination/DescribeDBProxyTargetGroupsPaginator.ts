// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBProxyTargetGroupsCommand,
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput,
} from "../commands/DescribeDBProxyTargetGroupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBProxyTargetGroups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyTargetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBProxyTargetGroupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBProxyTargetGroupsCommandInput,
  DescribeDBProxyTargetGroupsCommandOutput
>(RDSClient, DescribeDBProxyTargetGroupsCommand, "Marker", "Marker", "MaxRecords");
