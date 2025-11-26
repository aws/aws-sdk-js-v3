// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLocalGatewayVirtualInterfacesCommand,
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput,
} from "../commands/DescribeLocalGatewayVirtualInterfacesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLocalGatewayVirtualInterfaces: (
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewayVirtualInterfacesCommandInput,
  ...rest: any[]
) => Paginator<DescribeLocalGatewayVirtualInterfacesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLocalGatewayVirtualInterfacesCommandInput,
  DescribeLocalGatewayVirtualInterfacesCommandOutput
>(EC2Client, DescribeLocalGatewayVirtualInterfacesCommand, "NextToken", "NextToken", "MaxResults");
