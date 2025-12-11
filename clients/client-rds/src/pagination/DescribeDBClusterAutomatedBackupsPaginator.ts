// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterAutomatedBackupsCommand,
  DescribeDBClusterAutomatedBackupsCommandInput,
  DescribeDBClusterAutomatedBackupsCommandOutput,
} from "../commands/DescribeDBClusterAutomatedBackupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterAutomatedBackups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterAutomatedBackupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterAutomatedBackupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClusterAutomatedBackupsCommandInput,
  DescribeDBClusterAutomatedBackupsCommandOutput
>(RDSClient, DescribeDBClusterAutomatedBackupsCommand, "Marker", "Marker", "MaxRecords");
