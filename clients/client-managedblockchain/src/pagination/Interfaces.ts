import { ManagedBlockchain } from "../ManagedBlockchain";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ManagedBlockchainPaginationConfiguration extends PaginationConfiguration {
  client: ManagedBlockchain | ManagedBlockchainClient;
}
