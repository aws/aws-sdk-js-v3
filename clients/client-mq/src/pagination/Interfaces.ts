// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { MqClient } from "../MqClient";

/**
 * @public
 */
export interface MqPaginationConfiguration extends PaginationConfiguration {
  client: MqClient;
}
