// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeHostReservationsCommand,
  DescribeHostReservationsCommandInput,
  DescribeHostReservationsCommandOutput,
} from "../commands/DescribeHostReservationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeHostReservations: (
  config: EC2PaginationConfiguration,
  input: DescribeHostReservationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeHostReservationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeHostReservationsCommandInput,
  DescribeHostReservationsCommandOutput
>(EC2Client, DescribeHostReservationsCommand, "NextToken", "NextToken", "MaxResults");
