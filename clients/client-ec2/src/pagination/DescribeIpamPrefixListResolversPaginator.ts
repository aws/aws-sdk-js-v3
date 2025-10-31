// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeIpamPrefixListResolversCommand,
  DescribeIpamPrefixListResolversCommandInput,
  DescribeIpamPrefixListResolversCommandOutput,
} from "../commands/DescribeIpamPrefixListResolversCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamPrefixListResolvers: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamPrefixListResolversCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamPrefixListResolversCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamPrefixListResolversCommandInput,
  DescribeIpamPrefixListResolversCommandOutput
>(EC2Client, DescribeIpamPrefixListResolversCommand, "NextToken", "NextToken", "MaxResults");
