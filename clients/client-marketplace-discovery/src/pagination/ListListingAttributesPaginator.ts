// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListListingAttributesCommand,
  ListListingAttributesCommandInput,
  ListListingAttributesCommandOutput,
} from "../commands/ListListingAttributesCommand";
import { MarketplaceDiscoveryClient } from "../MarketplaceDiscoveryClient";
import type { MarketplaceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListListingAttributes: (
  config: MarketplaceDiscoveryPaginationConfiguration,
  input: ListListingAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListListingAttributesCommandOutput> = createPaginator<
  MarketplaceDiscoveryPaginationConfiguration,
  ListListingAttributesCommandInput,
  ListListingAttributesCommandOutput
>(MarketplaceDiscoveryClient, ListListingAttributesCommand, "nextToken", "nextToken", "maxResults");
