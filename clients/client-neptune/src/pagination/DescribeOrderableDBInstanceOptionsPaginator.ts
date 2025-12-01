// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput,
} from "../commands/DescribeOrderableDBInstanceOptionsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrderableDBInstanceOptions: (
  config: NeptunePaginationConfiguration,
  input: DescribeOrderableDBInstanceOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrderableDBInstanceOptionsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeOrderableDBInstanceOptionsCommandInput,
  DescribeOrderableDBInstanceOptionsCommandOutput
>(NeptuneClient, DescribeOrderableDBInstanceOptionsCommand, "Marker", "Marker", "MaxRecords");
