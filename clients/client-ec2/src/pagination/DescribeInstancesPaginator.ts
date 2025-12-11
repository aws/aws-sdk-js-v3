// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "../commands/DescribeInstancesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstances: (
  config: EC2PaginationConfiguration,
  input: DescribeInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput
>(EC2Client, DescribeInstancesCommand, "NextToken", "NextToken", "MaxResults");
