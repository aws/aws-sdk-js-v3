// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
} from "../commands/DescribeVpcEndpointConnectionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcEndpointConnections: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcEndpointConnectionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput
>(EC2Client, DescribeVpcEndpointConnectionsCommand, "NextToken", "NextToken", "MaxResults");
