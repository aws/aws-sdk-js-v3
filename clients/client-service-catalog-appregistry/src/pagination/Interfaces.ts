import { ServiceCatalogAppRegistry } from "../ServiceCatalogAppRegistry";
import { ServiceCatalogAppRegistryClient } from "../ServiceCatalogAppRegistryClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ServiceCatalogAppRegistryPaginationConfiguration extends PaginationConfiguration {
  client: ServiceCatalogAppRegistry | ServiceCatalogAppRegistryClient;
}
