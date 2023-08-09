// smithy-typescript generated code
import { PaginationConfiguration } from "@smithy/types";

import { KinesisClient } from "../KinesisClient";

/**
 * @public
 */
export interface KinesisPaginationConfiguration extends PaginationConfiguration {
  client: KinesisClient;
}
