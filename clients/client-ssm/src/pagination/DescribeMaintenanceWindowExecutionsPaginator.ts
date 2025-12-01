// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMaintenanceWindowExecutionsCommand,
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMaintenanceWindowExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowExecutionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput
>(SSMClient, DescribeMaintenanceWindowExecutionsCommand, "NextToken", "NextToken", "MaxResults");
