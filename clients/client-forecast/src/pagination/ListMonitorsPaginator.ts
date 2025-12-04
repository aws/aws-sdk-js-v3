// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "../commands/ListMonitorsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMonitors: (
  config: ForecastPaginationConfiguration,
  input: ListMonitorsCommandInput,
  ...rest: any[]
) => Paginator<ListMonitorsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput
>(ForecastClient, ListMonitorsCommand, "NextToken", "NextToken", "MaxResults");
