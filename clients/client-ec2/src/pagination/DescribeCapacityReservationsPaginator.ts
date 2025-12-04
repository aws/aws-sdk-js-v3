// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityReservationsCommand,
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
} from "../commands/DescribeCapacityReservationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityReservations: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityReservationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityReservationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput
>(EC2Client, DescribeCapacityReservationsCommand, "NextToken", "NextToken", "MaxResults");
