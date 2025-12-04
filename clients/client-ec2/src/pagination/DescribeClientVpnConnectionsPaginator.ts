// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClientVpnConnectionsCommand,
  DescribeClientVpnConnectionsCommandInput,
  DescribeClientVpnConnectionsCommandOutput,
} from "../commands/DescribeClientVpnConnectionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClientVpnConnections: (
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClientVpnConnectionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeClientVpnConnectionsCommandInput,
  DescribeClientVpnConnectionsCommandOutput
>(EC2Client, DescribeClientVpnConnectionsCommand, "NextToken", "NextToken", "MaxResults");
