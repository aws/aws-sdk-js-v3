import { SecretsManager } from "../SecretsManager";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SecretsManagerPaginationConfiguration extends PaginationConfiguration {
  client: SecretsManager | SecretsManagerClient;
}
