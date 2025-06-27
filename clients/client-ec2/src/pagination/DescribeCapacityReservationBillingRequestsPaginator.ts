// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeCapacityReservationBillingRequestsCommand,
  DescribeCapacityReservationBillingRequestsCommandInput,
  DescribeCapacityReservationBillingRequestsCommandOutput,
} from "../commands/DescribeCapacityReservationBillingRequestsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityReservationBillingRequests: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityReservationBillingRequestsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityReservationBillingRequestsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityReservationBillingRequestsCommandInput,
  DescribeCapacityReservationBillingRequestsCommandOutput
>(EC2Client, DescribeCapacityReservationBillingRequestsCommand, "NextToken", "NextToken", "MaxResults");
