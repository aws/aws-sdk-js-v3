// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeIpamPrefixListResolverTargetsCommand,
  DescribeIpamPrefixListResolverTargetsCommandInput,
  DescribeIpamPrefixListResolverTargetsCommandOutput,
} from "../commands/DescribeIpamPrefixListResolverTargetsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamPrefixListResolverTargets: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamPrefixListResolverTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamPrefixListResolverTargetsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamPrefixListResolverTargetsCommandInput,
  DescribeIpamPrefixListResolverTargetsCommandOutput
>(EC2Client, DescribeIpamPrefixListResolverTargetsCommand, "NextToken", "NextToken", "MaxResults");
