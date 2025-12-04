// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitorEvaluationsCommand,
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
} from "../commands/ListMonitorEvaluationsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitorEvaluations: (
  config: ForecastPaginationConfiguration,
  input: ListMonitorEvaluationsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitorEvaluationsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput
>(ForecastClient, ListMonitorEvaluationsCommand, "NextToken", "NextToken", "MaxResults");
