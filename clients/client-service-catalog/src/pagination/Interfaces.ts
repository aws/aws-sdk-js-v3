// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";

export interface ServiceCatalogPaginationConfiguration extends PaginationConfiguration {
  client: ServiceCatalog | ServiceCatalogClient;
}
