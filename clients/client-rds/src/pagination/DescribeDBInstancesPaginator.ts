// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBInstances: (
  config: RDSPaginationConfiguration,
  input: DescribeDBInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBInstancesCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput
>(RDSClient, DescribeDBInstancesCommand, "Marker", "Marker", "MaxRecords");
