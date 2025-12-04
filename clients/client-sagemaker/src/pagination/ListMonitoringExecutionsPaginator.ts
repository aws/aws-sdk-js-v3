// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitoringExecutionsCommand,
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "../commands/ListMonitoringExecutionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitoringExecutions: (
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitoringExecutionsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput
>(SageMakerClient, ListMonitoringExecutionsCommand, "NextToken", "NextToken", "MaxResults");
