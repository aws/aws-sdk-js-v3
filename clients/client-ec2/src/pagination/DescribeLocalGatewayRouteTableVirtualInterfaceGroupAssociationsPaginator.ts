// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput,
} from "../commands/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandInput,
  DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommandOutput
>(EC2Client, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand, "NextToken", "NextToken", "MaxResults");
