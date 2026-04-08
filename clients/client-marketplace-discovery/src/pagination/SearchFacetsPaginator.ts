// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchFacetsCommand,
  SearchFacetsCommandInput,
  SearchFacetsCommandOutput,
} from "../commands/SearchFacetsCommand";
import { MarketplaceDiscoveryClient } from "../MarketplaceDiscoveryClient";
import type { MarketplaceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchFacets: (
  config: MarketplaceDiscoveryPaginationConfiguration,
  input: SearchFacetsCommandInput,
  ...rest: any[]
) => Paginator<SearchFacetsCommandOutput> = createPaginator<
  MarketplaceDiscoveryPaginationConfiguration,
  SearchFacetsCommandInput,
  SearchFacetsCommandOutput
>(MarketplaceDiscoveryClient, SearchFacetsCommand, "nextToken", "nextToken", "");
