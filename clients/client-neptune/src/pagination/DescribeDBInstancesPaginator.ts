// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBInstances: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBInstancesCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput
>(NeptuneClient, DescribeDBInstancesCommand, "Marker", "Marker", "MaxRecords");
