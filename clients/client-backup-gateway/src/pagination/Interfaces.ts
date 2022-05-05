// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { BackupGateway } from "../BackupGateway";
import { BackupGatewayClient } from "../BackupGatewayClient";

export interface BackupGatewayPaginationConfiguration extends PaginationConfiguration {
  client: BackupGateway | BackupGatewayClient;
}
