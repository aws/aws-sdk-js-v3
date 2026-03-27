// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedDBInstancesOfferingsCommand,
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput,
} from "../commands/DescribeReservedDBInstancesOfferingsCommand";
import { RDSClient } from "../RDSClient";
import type { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedDBInstancesOfferings: (
  config: RDSPaginationConfiguration,
  input: DescribeReservedDBInstancesOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedDBInstancesOfferingsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeReservedDBInstancesOfferingsCommandInput,
  DescribeReservedDBInstancesOfferingsCommandOutput
>(RDSClient, DescribeReservedDBInstancesOfferingsCommand, "Marker", "Marker", "MaxRecords");
