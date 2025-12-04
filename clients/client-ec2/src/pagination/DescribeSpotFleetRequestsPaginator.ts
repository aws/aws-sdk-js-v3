// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSpotFleetRequestsCommand,
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput,
} from "../commands/DescribeSpotFleetRequestsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSpotFleetRequests: (
  config: EC2PaginationConfiguration,
  input: DescribeSpotFleetRequestsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSpotFleetRequestsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSpotFleetRequestsCommandInput,
  DescribeSpotFleetRequestsCommandOutput
>(EC2Client, DescribeSpotFleetRequestsCommand, "NextToken", "NextToken", "MaxResults");
