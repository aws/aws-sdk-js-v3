// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAutomationExecutionsCommand,
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "../commands/DescribeAutomationExecutionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAutomationExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeAutomationExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAutomationExecutionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput
>(SSMClient, DescribeAutomationExecutionsCommand, "NextToken", "NextToken", "MaxResults");
