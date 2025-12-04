// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAnomalySubscriptionsCommand,
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
} from "../commands/GetAnomalySubscriptionsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAnomalySubscriptions: (
  config: CostExplorerPaginationConfiguration,
  input: GetAnomalySubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<GetAnomalySubscriptionsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput
>(CostExplorerClient, GetAnomalySubscriptionsCommand, "NextPageToken", "NextPageToken", "MaxResults");
