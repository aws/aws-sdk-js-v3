import { SQS } from "../SQS";
import { SQSClient } from "../SQSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SQSPaginationConfiguration extends PaginationConfiguration {
  client: SQS | SQSClient;
}
