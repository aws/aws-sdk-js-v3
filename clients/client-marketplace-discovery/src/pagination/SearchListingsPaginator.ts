// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchListingsCommand,
  SearchListingsCommandInput,
  SearchListingsCommandOutput,
} from "../commands/SearchListingsCommand";
import { MarketplaceDiscoveryClient } from "../MarketplaceDiscoveryClient";
import type { MarketplaceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchListings: (
  config: MarketplaceDiscoveryPaginationConfiguration,
  input: SearchListingsCommandInput,
  ...rest: any[]
) => Paginator<SearchListingsCommandOutput> = createPaginator<
  MarketplaceDiscoveryPaginationConfiguration,
  SearchListingsCommandInput,
  SearchListingsCommandOutput
>(MarketplaceDiscoveryClient, SearchListingsCommand, "nextToken", "nextToken", "maxResults");
