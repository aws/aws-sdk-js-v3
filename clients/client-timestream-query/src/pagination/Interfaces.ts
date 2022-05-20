// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { TimestreamQuery } from "../TimestreamQuery";
import { TimestreamQueryClient } from "../TimestreamQueryClient";

export interface TimestreamQueryPaginationConfiguration extends PaginationConfiguration {
  client: TimestreamQuery | TimestreamQueryClient;
}
