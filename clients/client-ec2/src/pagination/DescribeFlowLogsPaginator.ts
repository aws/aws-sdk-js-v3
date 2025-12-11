// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFlowLogsCommand,
  DescribeFlowLogsCommandInput,
  DescribeFlowLogsCommandOutput,
} from "../commands/DescribeFlowLogsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFlowLogs: (
  config: EC2PaginationConfiguration,
  input: DescribeFlowLogsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFlowLogsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeFlowLogsCommandInput,
  DescribeFlowLogsCommandOutput
>(EC2Client, DescribeFlowLogsCommand, "NextToken", "NextToken", "MaxResults");
