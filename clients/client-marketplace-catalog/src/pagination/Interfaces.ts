import { MarketplaceCatalog } from "../MarketplaceCatalog";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MarketplaceCatalogPaginationConfiguration extends PaginationConfiguration {
  client: MarketplaceCatalog | MarketplaceCatalogClient;
}
