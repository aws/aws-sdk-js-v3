// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { DocDBClient } from "../DocDBClient";

/**
 * @public
 */
export interface DocDBPaginationConfiguration extends PaginationConfiguration {
  client: DocDBClient;
}
