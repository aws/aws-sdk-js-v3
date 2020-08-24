import { MigrationHub } from "../MigrationHub";
import { MigrationHubClient } from "../MigrationHubClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MigrationHubPaginationConfiguration extends PaginationConfiguration {
  client: MigrationHub | MigrationHubClient;
}
