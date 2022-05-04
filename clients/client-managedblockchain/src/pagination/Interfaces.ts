// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ManagedBlockchain } from "../ManagedBlockchain";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";

export interface ManagedBlockchainPaginationConfiguration extends PaginationConfiguration {
  client: ManagedBlockchain | ManagedBlockchainClient;
}
