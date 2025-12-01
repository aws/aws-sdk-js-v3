// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceStatusCommand,
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput,
} from "../commands/DescribeInstanceStatusCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceStatus: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceStatusCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceStatusCommandInput,
  DescribeInstanceStatusCommandOutput
>(EC2Client, DescribeInstanceStatusCommand, "NextToken", "NextToken", "MaxResults");
