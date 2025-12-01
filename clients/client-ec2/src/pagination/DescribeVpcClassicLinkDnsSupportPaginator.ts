// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcClassicLinkDnsSupportCommand,
  DescribeVpcClassicLinkDnsSupportCommandInput,
  DescribeVpcClassicLinkDnsSupportCommandOutput,
} from "../commands/DescribeVpcClassicLinkDnsSupportCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcClassicLinkDnsSupport: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcClassicLinkDnsSupportCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcClassicLinkDnsSupportCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcClassicLinkDnsSupportCommandInput,
  DescribeVpcClassicLinkDnsSupportCommandOutput
>(EC2Client, DescribeVpcClassicLinkDnsSupportCommand, "NextToken", "NextToken", "MaxResults");
