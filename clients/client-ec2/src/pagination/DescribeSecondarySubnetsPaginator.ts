// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSecondarySubnetsCommand,
  DescribeSecondarySubnetsCommandInput,
  DescribeSecondarySubnetsCommandOutput,
} from "../commands/DescribeSecondarySubnetsCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSecondarySubnets: (
  config: EC2PaginationConfiguration,
  input: DescribeSecondarySubnetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecondarySubnetsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSecondarySubnetsCommandInput,
  DescribeSecondarySubnetsCommandOutput
>(EC2Client, DescribeSecondarySubnetsCommand, "NextToken", "NextToken", "MaxResults");
