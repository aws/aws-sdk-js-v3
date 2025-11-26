// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { ECRClient } from "../ECRClient";

/**
 * @public
 */
export interface ECRPaginationConfiguration extends PaginationConfiguration {
  client: ECRClient;
}
