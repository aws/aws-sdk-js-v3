// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLocalGatewayRouteTableVpcAssociationsCommand,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput,
} from "../commands/DescribeLocalGatewayRouteTableVpcAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLocalGatewayRouteTableVpcAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVpcAssociationsCommandOutput
>(EC2Client, DescribeLocalGatewayRouteTableVpcAssociationsCommand, "NextToken", "NextToken", "MaxResults");
