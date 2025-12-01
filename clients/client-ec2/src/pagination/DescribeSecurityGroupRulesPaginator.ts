// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSecurityGroupRulesCommand,
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput,
} from "../commands/DescribeSecurityGroupRulesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSecurityGroupRules: (
  config: EC2PaginationConfiguration,
  input: DescribeSecurityGroupRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecurityGroupRulesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSecurityGroupRulesCommandInput,
  DescribeSecurityGroupRulesCommandOutput
>(EC2Client, DescribeSecurityGroupRulesCommand, "NextToken", "NextToken", "MaxResults");
