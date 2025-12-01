// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetInsightsCommand, GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInsights: (
  config: SecurityHubPaginationConfiguration,
  input: GetInsightsCommandInput,
  ...rest: any[]
) => Paginator<GetInsightsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetInsightsCommandInput,
  GetInsightsCommandOutput
>(SecurityHubClient, GetInsightsCommand, "NextToken", "NextToken", "MaxResults");
