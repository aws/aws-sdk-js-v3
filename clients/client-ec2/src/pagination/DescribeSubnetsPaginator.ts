// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSubnetsCommand,
  DescribeSubnetsCommandInput,
  DescribeSubnetsCommandOutput,
} from "../commands/DescribeSubnetsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSubnets: (
  config: EC2PaginationConfiguration,
  input: DescribeSubnetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSubnetsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSubnetsCommandInput,
  DescribeSubnetsCommandOutput
>(EC2Client, DescribeSubnetsCommand, "NextToken", "NextToken", "MaxResults");
