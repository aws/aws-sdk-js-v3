// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { ECSClient } from "../ECSClient";

/**
 * @public
 */
export interface ECSPaginationConfiguration extends PaginationConfiguration {
  client: ECSClient;
}
