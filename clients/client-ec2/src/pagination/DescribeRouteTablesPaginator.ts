// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRouteTablesCommand,
  DescribeRouteTablesCommandInput,
  DescribeRouteTablesCommandOutput,
} from "../commands/DescribeRouteTablesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRouteTables: (
  config: EC2PaginationConfiguration,
  input: DescribeRouteTablesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRouteTablesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeRouteTablesCommandInput,
  DescribeRouteTablesCommandOutput
>(EC2Client, DescribeRouteTablesCommand, "NextToken", "NextToken", "MaxResults");
