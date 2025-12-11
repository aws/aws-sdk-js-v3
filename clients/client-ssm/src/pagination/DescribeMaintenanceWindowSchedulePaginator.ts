// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowScheduleCommand,
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "../commands/DescribeMaintenanceWindowScheduleCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowSchedule: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowScheduleCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowScheduleCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput
>(SSMClient, DescribeMaintenanceWindowScheduleCommand, "NextToken", "NextToken", "MaxResults");
