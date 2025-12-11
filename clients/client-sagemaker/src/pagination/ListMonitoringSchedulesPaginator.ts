// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitoringSchedulesCommand,
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "../commands/ListMonitoringSchedulesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitoringSchedules: (
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringSchedulesCommandInput,
  ...rest: any[]
) => Paginator<ListMonitoringSchedulesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput
>(SageMakerClient, ListMonitoringSchedulesCommand, "NextToken", "NextToken", "MaxResults");
