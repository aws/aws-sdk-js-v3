// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowsCommand,
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "../commands/DescribeMaintenanceWindowsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindows: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput
>(SSMClient, DescribeMaintenanceWindowsCommand, "NextToken", "NextToken", "MaxResults");
