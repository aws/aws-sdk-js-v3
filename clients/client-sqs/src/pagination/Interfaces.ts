// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { SQSClient } from "../SQSClient";

/**
 * @public
 */
export interface SQSPaginationConfiguration extends PaginationConfiguration {
  client: SQSClient;
}
