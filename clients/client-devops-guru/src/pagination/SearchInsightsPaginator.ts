// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchInsightsCommand,
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput,
} from "../commands/SearchInsightsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchInsights: (
  config: DevOpsGuruPaginationConfiguration,
  input: SearchInsightsCommandInput,
  ...rest: any[]
) => Paginator<SearchInsightsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput
>(DevOpsGuruClient, SearchInsightsCommand, "NextToken", "NextToken", "MaxResults");
