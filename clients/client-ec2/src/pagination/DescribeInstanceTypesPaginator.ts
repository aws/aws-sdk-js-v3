// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceTypesCommand,
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput,
} from "../commands/DescribeInstanceTypesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceTypes: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceTypesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput
>(EC2Client, DescribeInstanceTypesCommand, "NextToken", "NextToken", "MaxResults");
