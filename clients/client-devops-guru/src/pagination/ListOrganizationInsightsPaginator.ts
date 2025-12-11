// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationInsightsCommand,
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
} from "../commands/ListOrganizationInsightsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationInsights: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListOrganizationInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationInsightsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput
>(DevOpsGuruClient, ListOrganizationInsightsCommand, "NextToken", "NextToken", "MaxResults");
