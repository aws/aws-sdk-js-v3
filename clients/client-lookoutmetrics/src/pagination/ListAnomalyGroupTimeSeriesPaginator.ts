// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAnomalyGroupTimeSeriesCommand,
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "../commands/ListAnomalyGroupTimeSeriesCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalyGroupTimeSeries: (
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupTimeSeriesCommandInput,
  ...rest: any[]
) => Paginator<ListAnomalyGroupTimeSeriesCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput
>(LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand, "NextToken", "NextToken", "MaxResults");
