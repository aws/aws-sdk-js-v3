// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcEndpointConnectionNotificationsCommand,
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput,
} from "../commands/DescribeVpcEndpointConnectionNotificationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcEndpointConnectionNotifications: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointConnectionNotificationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcEndpointConnectionNotificationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcEndpointConnectionNotificationsCommandInput,
  DescribeVpcEndpointConnectionNotificationsCommandOutput
>(EC2Client, DescribeVpcEndpointConnectionNotificationsCommand, "NextToken", "NextToken", "MaxResults");
