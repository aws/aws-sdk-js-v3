// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import {
  DescribeFlowExecutionRecordsCommand,
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "../commands/DescribeFlowExecutionRecordsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFlowExecutionRecords: (
  config: AppflowPaginationConfiguration,
  input: DescribeFlowExecutionRecordsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFlowExecutionRecordsCommandOutput> = createPaginator<
  AppflowPaginationConfiguration,
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput
>(AppflowClient, DescribeFlowExecutionRecordsCommand, "nextToken", "nextToken", "maxResults");
