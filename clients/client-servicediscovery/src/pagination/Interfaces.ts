// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ServiceDiscovery } from "../ServiceDiscovery";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";

export interface ServiceDiscoveryPaginationConfiguration extends PaginationConfiguration {
  client: ServiceDiscovery | ServiceDiscoveryClient;
}
