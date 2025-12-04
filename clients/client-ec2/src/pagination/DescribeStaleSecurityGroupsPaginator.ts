// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeStaleSecurityGroupsCommand,
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput,
} from "../commands/DescribeStaleSecurityGroupsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStaleSecurityGroups: (
  config: EC2PaginationConfiguration,
  input: DescribeStaleSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeStaleSecurityGroupsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput
>(EC2Client, DescribeStaleSecurityGroupsCommand, "NextToken", "NextToken", "MaxResults");
