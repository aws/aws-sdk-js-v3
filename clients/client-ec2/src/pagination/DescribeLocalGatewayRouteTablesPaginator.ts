// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLocalGatewayRouteTablesCommand,
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput,
} from "../commands/DescribeLocalGatewayRouteTablesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLocalGatewayRouteTables: (
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewayRouteTablesCommandInput,
  ...rest: any[]
) => Paginator<DescribeLocalGatewayRouteTablesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLocalGatewayRouteTablesCommandInput,
  DescribeLocalGatewayRouteTablesCommandOutput
>(EC2Client, DescribeLocalGatewayRouteTablesCommand, "NextToken", "NextToken", "MaxResults");
