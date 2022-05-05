// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";

export interface ServiceCatalogAppRegistryPaginationConfiguration extends PaginationConfiguration {
  client: ServiceCatalogAppRegistry | ServiceCatalogAppRegistryClient;
}
