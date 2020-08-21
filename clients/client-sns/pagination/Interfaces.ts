import { SNS } from "../SNS";
import { SNSClient } from "../SNSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SNSPaginationConfiguration extends PaginationConfiguration {
  client: SNS | SNSClient;
}
