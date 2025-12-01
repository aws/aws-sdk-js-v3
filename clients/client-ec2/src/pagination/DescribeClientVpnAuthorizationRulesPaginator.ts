// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClientVpnAuthorizationRulesCommand,
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput,
} from "../commands/DescribeClientVpnAuthorizationRulesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClientVpnAuthorizationRules: (
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnAuthorizationRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeClientVpnAuthorizationRulesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeClientVpnAuthorizationRulesCommandInput,
  DescribeClientVpnAuthorizationRulesCommandOutput
>(EC2Client, DescribeClientVpnAuthorizationRulesCommand, "NextToken", "NextToken", "MaxResults");
