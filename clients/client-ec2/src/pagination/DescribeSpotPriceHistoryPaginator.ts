// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSpotPriceHistoryCommand,
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput,
} from "../commands/DescribeSpotPriceHistoryCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSpotPriceHistory: (
  config: EC2PaginationConfiguration,
  input: DescribeSpotPriceHistoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeSpotPriceHistoryCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSpotPriceHistoryCommandInput,
  DescribeSpotPriceHistoryCommandOutput
>(EC2Client, DescribeSpotPriceHistoryCommand, "NextToken", "NextToken", "MaxResults");
