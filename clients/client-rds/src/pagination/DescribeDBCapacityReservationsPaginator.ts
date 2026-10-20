// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBCapacityReservationsCommand,
  DescribeDBCapacityReservationsCommandInput,
  DescribeDBCapacityReservationsCommandOutput,
} from "../commands/DescribeDBCapacityReservationsCommand";
import { RDSClient } from "../RDSClient";
import type { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBCapacityReservations: (
  config: RDSPaginationConfiguration,
  input: DescribeDBCapacityReservationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBCapacityReservationsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBCapacityReservationsCommandInput,
  DescribeDBCapacityReservationsCommandOutput
>(RDSClient, DescribeDBCapacityReservationsCommand, "Marker", "Marker", "MaxRecords");
