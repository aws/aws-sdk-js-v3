// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  DescribeAnomalyDetectorsCommand,
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
} from "../commands/DescribeAnomalyDetectorsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAnomalyDetectors: (
  config: CloudWatchPaginationConfiguration,
  input: DescribeAnomalyDetectorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAnomalyDetectorsCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput
>(CloudWatchClient, DescribeAnomalyDetectorsCommand, "NextToken", "NextToken", "MaxResults");
