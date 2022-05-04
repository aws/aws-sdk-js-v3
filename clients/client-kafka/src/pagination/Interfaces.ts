// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";

export interface KafkaPaginationConfiguration extends PaginationConfiguration {
  client: Kafka | KafkaClient;
}
