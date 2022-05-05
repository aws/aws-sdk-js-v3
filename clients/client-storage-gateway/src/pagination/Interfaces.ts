// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";

export interface StorageGatewayPaginationConfiguration extends PaginationConfiguration {
  client: StorageGateway | StorageGatewayClient;
}
