// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { TimestreamWrite } from "../TimestreamWrite";
import { TimestreamWriteClient } from "../TimestreamWriteClient";

export interface TimestreamWritePaginationConfiguration extends PaginationConfiguration {
  client: TimestreamWrite | TimestreamWriteClient;
}
