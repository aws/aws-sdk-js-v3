// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFulfillmentOptionsCommand,
  ListFulfillmentOptionsCommandInput,
  ListFulfillmentOptionsCommandOutput,
} from "../commands/ListFulfillmentOptionsCommand";
import { MarketplaceDiscoveryClient } from "../MarketplaceDiscoveryClient";
import type { MarketplaceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFulfillmentOptions: (
  config: MarketplaceDiscoveryPaginationConfiguration,
  input: ListFulfillmentOptionsCommandInput,
  ...rest: any[]
) => Paginator<ListFulfillmentOptionsCommandOutput> = createPaginator<
  MarketplaceDiscoveryPaginationConfiguration,
  ListFulfillmentOptionsCommandInput,
  ListFulfillmentOptionsCommandOutput
>(MarketplaceDiscoveryClient, ListFulfillmentOptionsCommand, "nextToken", "nextToken", "maxResults");
