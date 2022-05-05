// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";

export interface IoTPaginationConfiguration extends PaginationConfiguration {
  client: IoT | IoTClient;
}
