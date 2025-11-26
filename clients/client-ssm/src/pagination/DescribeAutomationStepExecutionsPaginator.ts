// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAutomationStepExecutionsCommand,
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "../commands/DescribeAutomationStepExecutionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAutomationStepExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeAutomationStepExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAutomationStepExecutionsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput
>(SSMClient, DescribeAutomationStepExecutionsCommand, "NextToken", "NextToken", "MaxResults");
