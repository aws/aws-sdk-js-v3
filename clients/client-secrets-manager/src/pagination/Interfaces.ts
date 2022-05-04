// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SecretsManager } from "../SecretsManager";
import { SecretsManagerClient } from "../SecretsManagerClient";

export interface SecretsManagerPaginationConfiguration extends PaginationConfiguration {
  client: SecretsManager | SecretsManagerClient;
}
