import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ServiceDiscoveryPaginationConfiguration extends PaginationConfiguration {
  client: ServiceDiscovery | ServiceDiscoveryClient;
}
