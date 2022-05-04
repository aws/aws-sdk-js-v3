// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";

export interface DatabaseMigrationServicePaginationConfiguration extends PaginationConfiguration {
  client: DatabaseMigrationService | DatabaseMigrationServiceClient;
}
