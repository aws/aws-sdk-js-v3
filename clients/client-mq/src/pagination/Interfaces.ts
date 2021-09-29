import { Mq } from "../Mq";
import { MqClient } from "../MqClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MqPaginationConfiguration extends PaginationConfiguration {
  client: Mq | MqClient;
}
