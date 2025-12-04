// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "../commands/ListEntitiesCommand";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntities: (
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListEntitiesCommandInput,
  ...rest: any[]
) => Paginator<ListEntitiesCommandOutput> = createPaginator<
  MarketplaceCatalogPaginationConfiguration,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput
>(MarketplaceCatalogClient, ListEntitiesCommand, "NextToken", "NextToken", "MaxResults");
