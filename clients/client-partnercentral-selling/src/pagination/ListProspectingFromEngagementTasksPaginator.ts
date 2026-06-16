// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProspectingFromEngagementTasksCommand,
  ListProspectingFromEngagementTasksCommandInput,
  ListProspectingFromEngagementTasksCommandOutput,
} from "../commands/ListProspectingFromEngagementTasksCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProspectingFromEngagementTasks: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListProspectingFromEngagementTasksCommandInput,
  ...rest: any[]
) => Paginator<ListProspectingFromEngagementTasksCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListProspectingFromEngagementTasksCommandInput,
  ListProspectingFromEngagementTasksCommandOutput
>(PartnerCentralSellingClient, ListProspectingFromEngagementTasksCommand, "NextToken", "NextToken", "MaxResults");
