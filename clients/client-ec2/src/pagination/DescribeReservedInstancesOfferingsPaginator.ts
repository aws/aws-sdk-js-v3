// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedInstancesOfferingsCommand,
  DescribeReservedInstancesOfferingsCommandInput,
  DescribeReservedInstancesOfferingsCommandOutput,
} from "../commands/DescribeReservedInstancesOfferingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedInstancesOfferings: (
  config: EC2PaginationConfiguration,
  input: DescribeReservedInstancesOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedInstancesOfferingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeReservedInstancesOfferingsCommandInput,
  DescribeReservedInstancesOfferingsCommandOutput
>(EC2Client, DescribeReservedInstancesOfferingsCommand, "NextToken", "NextToken", "MaxResults");
