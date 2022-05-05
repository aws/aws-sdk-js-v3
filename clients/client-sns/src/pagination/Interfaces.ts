// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SNS } from "../SNS";
import { SNSClient } from "../SNSClient";

export interface SNSPaginationConfiguration extends PaginationConfiguration {
  client: SNS | SNSClient;
}
