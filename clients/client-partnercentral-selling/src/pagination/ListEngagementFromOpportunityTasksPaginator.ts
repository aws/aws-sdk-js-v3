// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementFromOpportunityTasksCommandInput,
  ListEngagementFromOpportunityTasksCommandOutput,
} from "../commands/ListEngagementFromOpportunityTasksCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngagementFromOpportunityTasks: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListEngagementFromOpportunityTasksCommandInput,
  ...rest: any[]
) => Paginator<ListEngagementFromOpportunityTasksCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListEngagementFromOpportunityTasksCommandInput,
  ListEngagementFromOpportunityTasksCommandOutput
>(PartnerCentralSellingClient, ListEngagementFromOpportunityTasksCommand, "NextToken", "NextToken", "MaxResults");
