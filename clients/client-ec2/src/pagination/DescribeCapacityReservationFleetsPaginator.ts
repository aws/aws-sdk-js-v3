// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityReservationFleetsCommand,
  DescribeCapacityReservationFleetsCommandInput,
  DescribeCapacityReservationFleetsCommandOutput,
} from "../commands/DescribeCapacityReservationFleetsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityReservationFleets: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityReservationFleetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityReservationFleetsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityReservationFleetsCommandInput,
  DescribeCapacityReservationFleetsCommandOutput
>(EC2Client, DescribeCapacityReservationFleetsCommand, "NextToken", "NextToken", "MaxResults");
