import { MigrationHubConfig } from "../MigrationHubConfig";
import { MigrationHubConfigClient } from "../MigrationHubConfigClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MigrationHubConfigPaginationConfiguration extends PaginationConfiguration {
  client: MigrationHubConfig | MigrationHubConfigClient;
}
