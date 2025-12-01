// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCoipPoolsCommand,
  DescribeCoipPoolsCommandInput,
  DescribeCoipPoolsCommandOutput,
} from "../commands/DescribeCoipPoolsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCoipPools: (
  config: EC2PaginationConfiguration,
  input: DescribeCoipPoolsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCoipPoolsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCoipPoolsCommandInput,
  DescribeCoipPoolsCommandOutput
>(EC2Client, DescribeCoipPoolsCommand, "NextToken", "NextToken", "MaxResults");
