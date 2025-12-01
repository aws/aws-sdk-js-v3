// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpamResourceDiscoveriesCommand,
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput,
} from "../commands/DescribeIpamResourceDiscoveriesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamResourceDiscoveries: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamResourceDiscoveriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamResourceDiscoveriesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamResourceDiscoveriesCommandInput,
  DescribeIpamResourceDiscoveriesCommandOutput
>(EC2Client, DescribeIpamResourceDiscoveriesCommand, "NextToken", "NextToken", "MaxResults");
