// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowTargetsCommand,
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "../commands/DescribeMaintenanceWindowTargetsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowTargets: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowTargetsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput
>(SSMClient, DescribeMaintenanceWindowTargetsCommand, "NextToken", "NextToken", "MaxResults");
