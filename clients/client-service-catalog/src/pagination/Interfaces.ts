import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ServiceCatalogPaginationConfiguration extends PaginationConfiguration {
  client: ServiceCatalog | ServiceCatalogClient;
}
