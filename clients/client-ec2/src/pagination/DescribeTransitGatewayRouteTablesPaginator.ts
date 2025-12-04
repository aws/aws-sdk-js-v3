// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayRouteTablesCommand,
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput,
} from "../commands/DescribeTransitGatewayRouteTablesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayRouteTables: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayRouteTablesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayRouteTablesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayRouteTablesCommandInput,
  DescribeTransitGatewayRouteTablesCommandOutput
>(EC2Client, DescribeTransitGatewayRouteTablesCommand, "NextToken", "NextToken", "MaxResults");
