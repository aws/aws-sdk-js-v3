// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { TimestreamInfluxDBClient } from "../TimestreamInfluxDBClient";

/**
 * @public
 */
export interface TimestreamInfluxDBPaginationConfiguration extends PaginationConfiguration {
  client: TimestreamInfluxDBClient;
}
