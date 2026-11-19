// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpportunityBulkJobResultsCommand,
  ListOpportunityBulkJobResultsCommandInput,
  ListOpportunityBulkJobResultsCommandOutput,
} from "../commands/ListOpportunityBulkJobResultsCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpportunityBulkJobResults: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListOpportunityBulkJobResultsCommandInput,
  ...rest: any[]
) => Paginator<ListOpportunityBulkJobResultsCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListOpportunityBulkJobResultsCommandInput,
  ListOpportunityBulkJobResultsCommandOutput
>(PartnerCentralSellingClient, ListOpportunityBulkJobResultsCommand, "NextToken", "NextToken", "MaxResults");
