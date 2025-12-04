// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrderableDBInstanceOptions: (
  config: RDSPaginationConfiguration,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrderableDBInstanceOptionsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput
>(RDSClient, DescribeOrderableDBInstanceOptionsCommand, "Marker", "Marker", "MaxRecords");
