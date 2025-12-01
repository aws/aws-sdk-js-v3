// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceTypeOfferingsCommand,
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput,
} from "../commands/DescribeInstanceTypeOfferingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceTypeOfferings: (
  config: EC2PaginationConfiguration,
  input: DescribeInstanceTypeOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceTypeOfferingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInstanceTypeOfferingsCommandInput,
  DescribeInstanceTypeOfferingsCommandOutput
>(EC2Client, DescribeInstanceTypeOfferingsCommand, "NextToken", "NextToken", "MaxResults");
