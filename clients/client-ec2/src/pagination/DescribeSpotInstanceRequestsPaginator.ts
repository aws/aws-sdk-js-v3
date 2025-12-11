// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSpotInstanceRequestsCommand,
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
} from "../commands/DescribeSpotInstanceRequestsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSpotInstanceRequests: (
  config: EC2PaginationConfiguration,
  input: DescribeSpotInstanceRequestsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSpotInstanceRequestsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput
>(EC2Client, DescribeSpotInstanceRequestsCommand, "NextToken", "NextToken", "MaxResults");
