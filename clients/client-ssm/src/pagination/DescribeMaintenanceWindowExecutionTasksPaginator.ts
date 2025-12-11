// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowExecutionTasksCommand,
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowExecutionTasks: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowExecutionTasksCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput
>(SSMClient, DescribeMaintenanceWindowExecutionTasksCommand, "NextToken", "NextToken", "MaxResults");
