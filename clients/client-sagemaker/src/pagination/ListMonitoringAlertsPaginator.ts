// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitoringAlertsCommand,
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
} from "../commands/ListMonitoringAlertsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitoringAlerts: (
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringAlertsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitoringAlertsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput
>(SageMakerClient, ListMonitoringAlertsCommand, "NextToken", "NextToken", "MaxResults");
