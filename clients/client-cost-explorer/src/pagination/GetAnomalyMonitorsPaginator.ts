// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAnomalyMonitorsCommand,
  GetAnomalyMonitorsCommandInput,
  GetAnomalyMonitorsCommandOutput,
} from "../commands/GetAnomalyMonitorsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAnomalyMonitors: (
  config: CostExplorerPaginationConfiguration,
  input: GetAnomalyMonitorsCommandInput,
  ...rest: any[]
) => Paginator<GetAnomalyMonitorsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetAnomalyMonitorsCommandInput,
  GetAnomalyMonitorsCommandOutput
>(CostExplorerClient, GetAnomalyMonitorsCommand, "NextPageToken", "NextPageToken", "MaxResults");
