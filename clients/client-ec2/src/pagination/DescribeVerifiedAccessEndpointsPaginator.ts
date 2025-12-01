// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVerifiedAccessEndpointsCommand,
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput,
} from "../commands/DescribeVerifiedAccessEndpointsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVerifiedAccessEndpoints: (
  config: EC2PaginationConfiguration,
  input: DescribeVerifiedAccessEndpointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVerifiedAccessEndpointsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput
>(EC2Client, DescribeVerifiedAccessEndpointsCommand, "NextToken", "NextToken", "MaxResults");
