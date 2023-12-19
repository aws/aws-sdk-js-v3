// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAnomalyDetectorsCommand,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "../commands/ListAnomalyDetectorsCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalyDetectors: (
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyDetectorsCommandInput,
  ...rest: any[]
) => Paginator<ListAnomalyDetectorsCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput
>(LookoutMetricsClient, ListAnomalyDetectorsCommand, "NextToken", "NextToken", "MaxResults");
