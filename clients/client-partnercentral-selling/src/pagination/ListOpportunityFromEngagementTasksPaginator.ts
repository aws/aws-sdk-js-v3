// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpportunityFromEngagementTasksCommand,
  ListOpportunityFromEngagementTasksCommandInput,
  ListOpportunityFromEngagementTasksCommandOutput,
} from "../commands/ListOpportunityFromEngagementTasksCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpportunityFromEngagementTasks: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListOpportunityFromEngagementTasksCommandInput,
  ...rest: any[]
) => Paginator<ListOpportunityFromEngagementTasksCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListOpportunityFromEngagementTasksCommandInput,
  ListOpportunityFromEngagementTasksCommandOutput
>(PartnerCentralSellingClient, ListOpportunityFromEngagementTasksCommand, "NextToken", "NextToken", "MaxResults");
