// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityReservationDateChangeQuotesCommand,
  DescribeCapacityReservationDateChangeQuotesCommandInput,
  DescribeCapacityReservationDateChangeQuotesCommandOutput,
} from "../commands/DescribeCapacityReservationDateChangeQuotesCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityReservationDateChangeQuotes: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityReservationDateChangeQuotesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityReservationDateChangeQuotesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityReservationDateChangeQuotesCommandInput,
  DescribeCapacityReservationDateChangeQuotesCommandOutput
>(EC2Client, DescribeCapacityReservationDateChangeQuotesCommand, "NextToken", "NextToken", "MaxResults");
