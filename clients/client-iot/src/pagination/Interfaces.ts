import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTPaginationConfiguration extends PaginationConfiguration {
  client: IoT | IoTClient;
}
