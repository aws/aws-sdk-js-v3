// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowsForTargetCommand,
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowsForTarget: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowsForTargetCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput
>(SSMClient, DescribeMaintenanceWindowsForTargetCommand, "NextToken", "NextToken", "MaxResults");
