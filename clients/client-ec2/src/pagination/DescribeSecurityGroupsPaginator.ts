// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSecurityGroupsCommand,
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
} from "../commands/DescribeSecurityGroupsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSecurityGroups: (
  config: EC2PaginationConfiguration,
  input: DescribeSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecurityGroupsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput
>(EC2Client, DescribeSecurityGroupsCommand, "NextToken", "NextToken", "MaxResults");
