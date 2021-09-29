import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface StorageGatewayPaginationConfiguration extends PaginationConfiguration {
  client: StorageGateway | StorageGatewayClient;
}
