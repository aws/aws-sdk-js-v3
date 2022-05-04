// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SQS } from "../SQS";
import { SQSClient } from "../SQSClient";

export interface SQSPaginationConfiguration extends PaginationConfiguration {
  client: SQS | SQSClient;
}
