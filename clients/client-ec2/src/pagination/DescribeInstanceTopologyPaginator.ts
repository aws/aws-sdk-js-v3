// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceTopologyCommand,
  DescribeInstanceTopologyCommandInput,
  DescribeInstanceTopologyCommandOutput,
} from "../commands/DescribeInstanceTopologyCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceTopology: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceTopologyCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceTopologyCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceTopologyCommandInput,
  DescribeInstanceTopologyCommandOutput
>(EC2Client, DescribeInstanceTopologyCommand, "NextToken", "NextToken", "MaxResults");
