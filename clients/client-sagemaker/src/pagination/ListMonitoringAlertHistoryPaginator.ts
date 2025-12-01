// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitoringAlertHistoryCommand,
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
} from "../commands/ListMonitoringAlertHistoryCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitoringAlertHistory: (
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringAlertHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListMonitoringAlertHistoryCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput
>(SageMakerClient, ListMonitoringAlertHistoryCommand, "NextToken", "NextToken", "MaxResults");
