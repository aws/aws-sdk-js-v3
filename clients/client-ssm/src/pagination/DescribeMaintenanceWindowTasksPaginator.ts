// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowTasksCommand,
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowTasks: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowTasksCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput
>(SSMClient, DescribeMaintenanceWindowTasksCommand, "NextToken", "NextToken", "MaxResults");
