// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMarketplaceRevenueSharesCommand,
  ListMarketplaceRevenueSharesCommandInput,
  ListMarketplaceRevenueSharesCommandOutput,
} from "../commands/ListMarketplaceRevenueSharesCommand";
import { PartnerCentralRevenueMeasurementClient } from "../PartnerCentralRevenueMeasurementClient";
import type { PartnerCentralRevenueMeasurementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMarketplaceRevenueShares: (
  config: PartnerCentralRevenueMeasurementPaginationConfiguration,
  input: ListMarketplaceRevenueSharesCommandInput,
  ...rest: any[]
) => Paginator<ListMarketplaceRevenueSharesCommandOutput> = createPaginator<
  PartnerCentralRevenueMeasurementPaginationConfiguration,
  ListMarketplaceRevenueSharesCommandInput,
  ListMarketplaceRevenueSharesCommandOutput
>(PartnerCentralRevenueMeasurementClient, ListMarketplaceRevenueSharesCommand, "NextToken", "NextToken", "MaxResults");
