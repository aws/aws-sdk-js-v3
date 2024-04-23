// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlerts: (
  config: LookoutMetricsPaginationConfiguration,
  input: ListAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListAlertsCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  ListAlertsCommandInput,
  ListAlertsCommandOutput
>(LookoutMetricsClient, ListAlertsCommand, "NextToken", "NextToken", "MaxResults");
