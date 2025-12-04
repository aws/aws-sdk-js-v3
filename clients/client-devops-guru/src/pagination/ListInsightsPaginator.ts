// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInsightsCommand,
  ListInsightsCommandInput,
  ListInsightsCommandOutput,
} from "../commands/ListInsightsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInsights: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListInsightsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListInsightsCommandInput,
  ListInsightsCommandOutput
>(DevOpsGuruClient, ListInsightsCommand, "NextToken", "NextToken", "MaxResults");
