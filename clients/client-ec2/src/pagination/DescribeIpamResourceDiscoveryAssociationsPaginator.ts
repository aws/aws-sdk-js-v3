// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpamResourceDiscoveryAssociationsCommand,
  DescribeIpamResourceDiscoveryAssociationsCommandInput,
  DescribeIpamResourceDiscoveryAssociationsCommandOutput,
} from "../commands/DescribeIpamResourceDiscoveryAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamResourceDiscoveryAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamResourceDiscoveryAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamResourceDiscoveryAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamResourceDiscoveryAssociationsCommandInput,
  DescribeIpamResourceDiscoveryAssociationsCommandOutput
>(EC2Client, DescribeIpamResourceDiscoveryAssociationsCommand, "NextToken", "NextToken", "MaxResults");
