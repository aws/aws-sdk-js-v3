// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkInterfacePermissionsCommand,
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
} from "../commands/DescribeNetworkInterfacePermissionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkInterfacePermissions: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInterfacePermissionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkInterfacePermissionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput
>(EC2Client, DescribeNetworkInterfacePermissionsCommand, "NextToken", "NextToken", "MaxResults");
