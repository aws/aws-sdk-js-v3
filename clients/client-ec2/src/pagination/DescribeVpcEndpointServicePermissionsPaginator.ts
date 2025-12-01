// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcEndpointServicePermissionsCommand,
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
} from "../commands/DescribeVpcEndpointServicePermissionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcEndpointServicePermissions: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointServicePermissionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcEndpointServicePermissionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput
>(EC2Client, DescribeVpcEndpointServicePermissionsCommand, "NextToken", "NextToken", "MaxResults");
