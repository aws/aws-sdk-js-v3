// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { KafkaClient } from "../KafkaClient";

/**
 * @public
 */
export interface KafkaPaginationConfiguration extends PaginationConfiguration {
  client: KafkaClient;
}
