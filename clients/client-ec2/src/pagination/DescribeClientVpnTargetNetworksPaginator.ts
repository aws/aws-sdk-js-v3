// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClientVpnTargetNetworksCommand,
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput,
} from "../commands/DescribeClientVpnTargetNetworksCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClientVpnTargetNetworks: (
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnTargetNetworksCommandInput,
  ...rest: any[]
) => Paginator<DescribeClientVpnTargetNetworksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput
>(EC2Client, DescribeClientVpnTargetNetworksCommand, "NextToken", "NextToken", "MaxResults");
