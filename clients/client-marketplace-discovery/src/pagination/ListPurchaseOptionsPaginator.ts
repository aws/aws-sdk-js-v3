// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPurchaseOptionsCommand,
  ListPurchaseOptionsCommandInput,
  ListPurchaseOptionsCommandOutput,
} from "../commands/ListPurchaseOptionsCommand";
import { MarketplaceDiscoveryClient } from "../MarketplaceDiscoveryClient";
import type { MarketplaceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPurchaseOptions: (
  config: MarketplaceDiscoveryPaginationConfiguration,
  input: ListPurchaseOptionsCommandInput,
  ...rest: any[]
) => Paginator<ListPurchaseOptionsCommandOutput> = createPaginator<
  MarketplaceDiscoveryPaginationConfiguration,
  ListPurchaseOptionsCommandInput,
  ListPurchaseOptionsCommandOutput
>(MarketplaceDiscoveryClient, ListPurchaseOptionsCommand, "nextToken", "nextToken", "");
