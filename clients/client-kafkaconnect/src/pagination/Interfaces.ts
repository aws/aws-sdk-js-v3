// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { KafkaConnect } from "../KafkaConnect";
import { KafkaConnectClient } from "../KafkaConnectClient";

export interface KafkaConnectPaginationConfiguration extends PaginationConfiguration {
  client: KafkaConnect | KafkaConnectClient;
}
