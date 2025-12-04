// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpamScopesCommand,
  DescribeIpamScopesCommandInput,
  DescribeIpamScopesCommandOutput,
} from "../commands/DescribeIpamScopesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpamScopes: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamScopesCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamScopesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamScopesCommandInput,
  DescribeIpamScopesCommandOutput
>(EC2Client, DescribeIpamScopesCommand, "NextToken", "NextToken", "MaxResults");
