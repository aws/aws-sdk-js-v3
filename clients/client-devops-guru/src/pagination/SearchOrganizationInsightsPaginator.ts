// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchOrganizationInsightsCommand,
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
} from "../commands/SearchOrganizationInsightsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchOrganizationInsights: (
  config: DevOpsGuruPaginationConfiguration,
  input: SearchOrganizationInsightsCommandInput,
  ...rest: any[]
) => Paginator<SearchOrganizationInsightsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput
>(DevOpsGuruClient, SearchOrganizationInsightsCommand, "NextToken", "NextToken", "MaxResults");
