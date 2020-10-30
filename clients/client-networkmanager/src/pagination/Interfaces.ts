import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface NetworkManagerPaginationConfiguration extends PaginationConfiguration {
  client: NetworkManager | NetworkManagerClient;
}
