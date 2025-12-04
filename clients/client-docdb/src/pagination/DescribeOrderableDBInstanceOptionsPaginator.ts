// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrderableDBInstanceOptions: (
  config: DocDBPaginationConfiguration,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrderableDBInstanceOptionsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput
>(DocDBClient, DescribeOrderableDBInstanceOptionsCommand, "Marker", "Marker", "MaxRecords");
