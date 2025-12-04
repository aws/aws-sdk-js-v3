// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeIpamsCommand,
  DescribeIpamsCommandInput,
  DescribeIpamsCommandOutput,
} from "../commands/DescribeIpamsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeIpams: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeIpamsCommandInput,
  DescribeIpamsCommandOutput
>(EC2Client, DescribeIpamsCommand, "NextToken", "NextToken", "MaxResults");
