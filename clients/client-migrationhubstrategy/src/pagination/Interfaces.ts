import { PaginationConfiguration } from "@aws-sdk/types";

import { MigrationHubStrategy } from "../MigrationHubStrategy";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";

export interface MigrationHubStrategyPaginationConfiguration extends PaginationConfiguration {
  client: MigrationHubStrategy | MigrationHubStrategyClient;
}
