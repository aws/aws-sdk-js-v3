// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMarketplaceRevenueShareAllocationsCommand,
  ListMarketplaceRevenueShareAllocationsCommandInput,
  ListMarketplaceRevenueShareAllocationsCommandOutput,
} from "../commands/ListMarketplaceRevenueShareAllocationsCommand";
import { PartnerCentralRevenueMeasurementClient } from "../PartnerCentralRevenueMeasurementClient";
import type { PartnerCentralRevenueMeasurementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMarketplaceRevenueShareAllocations: (
  config: PartnerCentralRevenueMeasurementPaginationConfiguration,
  input: ListMarketplaceRevenueShareAllocationsCommandInput,
  ...rest: any[]
) => Paginator<ListMarketplaceRevenueShareAllocationsCommandOutput> = createPaginator<
  PartnerCentralRevenueMeasurementPaginationConfiguration,
  ListMarketplaceRevenueShareAllocationsCommandInput,
  ListMarketplaceRevenueShareAllocationsCommandOutput
>(PartnerCentralRevenueMeasurementClient, ListMarketplaceRevenueShareAllocationsCommand, "NextToken", "NextToken", "MaxResults");
