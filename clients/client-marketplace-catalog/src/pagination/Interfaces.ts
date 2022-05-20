// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MarketplaceCatalog } from "../MarketplaceCatalog";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";

export interface MarketplaceCatalogPaginationConfiguration extends PaginationConfiguration {
  client: MarketplaceCatalog | MarketplaceCatalogClient;
}
