// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListAnomalyGroupSummariesCommand,
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "../commands/ListAnomalyGroupSummariesCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalyGroupSummaries: (
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListAnomalyGroupSummariesCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput
>(LookoutMetricsClient, ListAnomalyGroupSummariesCommand, "NextToken", "NextToken", "MaxResults");
