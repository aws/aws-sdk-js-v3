import { KafkaConnect } from "../KafkaConnect";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface KafkaConnectPaginationConfiguration extends PaginationConfiguration {
  client: KafkaConnect | KafkaConnectClient;
}
