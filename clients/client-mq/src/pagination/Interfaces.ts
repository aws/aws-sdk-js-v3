// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Mq } from "../Mq";
import { MqClient } from "../MqClient";

export interface MqPaginationConfiguration extends PaginationConfiguration {
  client: Mq | MqClient;
}
