// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { MemoryDBClient } from "../MemoryDBClient";

/**
 * @public
 */
export interface MemoryDBPaginationConfiguration extends PaginationConfiguration {
  client: MemoryDBClient;
}
