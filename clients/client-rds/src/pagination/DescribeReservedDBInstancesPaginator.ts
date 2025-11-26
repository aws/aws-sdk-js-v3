// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
} from "../commands/DescribeReservedDBInstancesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedDBInstances: (
  config: RDSPaginationConfiguration,
  input: DescribeReservedDBInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedDBInstancesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput
>(RDSClient, DescribeReservedDBInstancesCommand, "Marker", "Marker", "MaxRecords");
