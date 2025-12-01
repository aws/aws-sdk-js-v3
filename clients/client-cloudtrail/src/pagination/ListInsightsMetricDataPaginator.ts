// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListInsightsMetricDataCommand,
  ListInsightsMetricDataCommandInput,
  ListInsightsMetricDataCommandOutput,
} from "../commands/ListInsightsMetricDataCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInsightsMetricData: (
  config: CloudTrailPaginationConfiguration,
  input: ListInsightsMetricDataCommandInput,
  ...rest: any[]
) => Paginator<ListInsightsMetricDataCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListInsightsMetricDataCommandInput,
  ListInsightsMetricDataCommandOutput
>(CloudTrailClient, ListInsightsMetricDataCommand, "NextToken", "NextToken", "MaxResults");
