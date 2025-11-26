// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityBlockOfferingsCommand,
  DescribeCapacityBlockOfferingsCommandInput,
  DescribeCapacityBlockOfferingsCommandOutput,
} from "../commands/DescribeCapacityBlockOfferingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityBlockOfferings: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlockOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlockOfferingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityBlockOfferingsCommandInput,
  DescribeCapacityBlockOfferingsCommandOutput
>(EC2Client, DescribeCapacityBlockOfferingsCommand, "NextToken", "NextToken", "MaxResults");
