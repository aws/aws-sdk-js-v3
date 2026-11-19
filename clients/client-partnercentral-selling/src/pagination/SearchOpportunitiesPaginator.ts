// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchOpportunitiesCommand,
  SearchOpportunitiesCommandInput,
  SearchOpportunitiesCommandOutput,
} from "../commands/SearchOpportunitiesCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import type { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchOpportunities: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: SearchOpportunitiesCommandInput,
  ...rest: any[]
) => Paginator<SearchOpportunitiesCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  SearchOpportunitiesCommandInput,
  SearchOpportunitiesCommandOutput
>(PartnerCentralSellingClient, SearchOpportunitiesCommand, "NextToken", "NextToken", "MaxResults");
