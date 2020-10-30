import { ApplicationDiscoveryService } from "../ApplicationDiscoveryService";
import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ApplicationDiscoveryServicePaginationConfiguration extends PaginationConfiguration {
  client: ApplicationDiscoveryService | ApplicationDiscoveryServiceClient;
}
