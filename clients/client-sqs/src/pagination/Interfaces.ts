// smithy-typescript generated code
import { PaginationConfiguration } from "@smithy/types";

import { SQSClient } from "../SQSClient";

/**
 * @public
 */
export interface SQSPaginationConfiguration extends PaginationConfiguration {
  client: SQSClient;
}
