// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBInstanceAutomatedBackupsCommand,
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBInstanceAutomatedBackupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBInstanceAutomatedBackups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBInstanceAutomatedBackupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBInstanceAutomatedBackupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput
>(RDSClient, DescribeDBInstanceAutomatedBackupsCommand, "Marker", "Marker", "MaxRecords");
