// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { PrivateNetworks } from "../PrivateNetworks";
import { PrivateNetworksClient } from "../PrivateNetworksClient";

export interface PrivateNetworksPaginationConfiguration extends PaginationConfiguration {
  client: PrivateNetworks | PrivateNetworksClient;
}
