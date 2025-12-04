// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";

/**
 * @public
 */
export interface CloudWatchPaginationConfiguration extends PaginationConfiguration {
  client: CloudWatchClient;
}
