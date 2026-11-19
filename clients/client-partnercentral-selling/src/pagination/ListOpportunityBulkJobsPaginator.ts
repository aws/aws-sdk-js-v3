// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpportunityBulkJobsCommand,
  ListOpportunityBulkJobsCommandInput,
  ListOpportunityBulkJobsCommandOutput,
} from "../commands/ListOpportunityBulkJobsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpportunityBulkJobs: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListOpportunityBulkJobsCommandInput,
  ...rest: any[]
) => Paginator<ListOpportunityBulkJobsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListOpportunityBulkJobsCommandInput,
  ListOpportunityBulkJobsCommandOutput
>(PartnerCentralSellingClient, ListOpportunityBulkJobsCommand, "NextToken", "NextToken", "MaxResults");
