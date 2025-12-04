// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowExecutionTaskInvocations: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
>(SSMClient, DescribeMaintenanceWindowExecutionTaskInvocationsCommand, "NextToken", "NextToken", "MaxResults");
