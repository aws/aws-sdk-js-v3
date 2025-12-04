// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { SecretsManagerClient } from "../SecretsManagerClient";

/**
 * @public
 */
export interface SecretsManagerPaginationConfiguration extends PaginationConfiguration {
  client: SecretsManagerClient;
}
