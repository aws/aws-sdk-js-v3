// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReportDefinitionsCommand,
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
} from "../commands/DescribeReportDefinitionsCommand";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient";
import { CostAndUsageReportServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReportDefinitions: (
  config: CostAndUsageReportServicePaginationConfiguration,
  input: DescribeReportDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReportDefinitionsCommandOutput> = createPaginator<
  CostAndUsageReportServicePaginationConfiguration,
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput
>(CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
