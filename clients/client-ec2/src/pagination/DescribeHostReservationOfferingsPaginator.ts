// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeHostReservationOfferingsCommand,
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput,
} from "../commands/DescribeHostReservationOfferingsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeHostReservationOfferings: (
  config: EC2PaginationConfiguration,
  input: DescribeHostReservationOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeHostReservationOfferingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeHostReservationOfferingsCommandInput,
  DescribeHostReservationOfferingsCommandOutput
>(EC2Client, DescribeHostReservationOfferingsCommand, "NextToken", "NextToken", "MaxResults");
