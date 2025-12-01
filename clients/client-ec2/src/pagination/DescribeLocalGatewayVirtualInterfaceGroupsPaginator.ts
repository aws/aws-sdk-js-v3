// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLocalGatewayVirtualInterfaceGroupsCommand,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput,
} from "../commands/DescribeLocalGatewayVirtualInterfaceGroupsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLocalGatewayVirtualInterfaceGroups: (
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandInput,
  DescribeLocalGatewayVirtualInterfaceGroupsCommandOutput
>(EC2Client, DescribeLocalGatewayVirtualInterfaceGroupsCommand, "NextToken", "NextToken", "MaxResults");
