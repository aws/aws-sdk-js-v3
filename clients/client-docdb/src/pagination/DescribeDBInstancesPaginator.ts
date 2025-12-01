// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBInstances: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBInstancesCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput
>(DocDBClient, DescribeDBInstancesCommand, "Marker", "Marker", "MaxRecords");
