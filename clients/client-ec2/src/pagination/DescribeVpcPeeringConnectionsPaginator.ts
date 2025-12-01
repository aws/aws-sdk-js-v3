// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "../commands/DescribeVpcPeeringConnectionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcPeeringConnections: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcPeeringConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcPeeringConnectionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput
>(EC2Client, DescribeVpcPeeringConnectionsCommand, "NextToken", "NextToken", "MaxResults");
