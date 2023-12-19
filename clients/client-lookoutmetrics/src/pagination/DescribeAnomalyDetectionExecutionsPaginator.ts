// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeAnomalyDetectionExecutionsCommand,
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
} from "../commands/DescribeAnomalyDetectionExecutionsCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAnomalyDetectionExecutions: (
  config: LookoutMetricsPaginationConfiguration,
  input: DescribeAnomalyDetectionExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAnomalyDetectionExecutionsCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput
>(LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand, "NextToken", "NextToken", "MaxResults");
