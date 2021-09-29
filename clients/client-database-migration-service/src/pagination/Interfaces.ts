import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DatabaseMigrationServicePaginationConfiguration extends PaginationConfiguration {
  client: DatabaseMigrationService | DatabaseMigrationServiceClient;
}
