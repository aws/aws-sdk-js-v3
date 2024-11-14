// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListOpportunitiesCommand,
  ListOpportunitiesCommandInput,
  ListOpportunitiesCommandOutput,
} from "../commands/ListOpportunitiesCommand";
import { PartnerCentralSellingClient } from "../PartnerCentralSellingClient";
import { PartnerCentralSellingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpportunities: (
  config: PartnerCentralSellingPaginationConfiguration,
  input: ListOpportunitiesCommandInput,
  ...rest: any[]
) => Paginator<ListOpportunitiesCommandOutput> = createPaginator<
  PartnerCentralSellingPaginationConfiguration,
  ListOpportunitiesCommandInput,
  ListOpportunitiesCommandOutput
>(PartnerCentralSellingClient, ListOpportunitiesCommand, "NextToken", "NextToken", "MaxResults");
