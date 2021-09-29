import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface KafkaPaginationConfiguration extends PaginationConfiguration {
  client: Kafka | KafkaClient;
}
