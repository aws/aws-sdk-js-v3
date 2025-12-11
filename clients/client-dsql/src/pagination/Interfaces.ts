// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { DSQLClient } from "../DSQLClient";

/**
 * @public
 */
export interface DSQLPaginationConfiguration extends PaginationConfiguration {
  client: DSQLClient;
}
