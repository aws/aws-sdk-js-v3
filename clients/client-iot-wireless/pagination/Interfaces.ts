import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTWirelessPaginationConfiguration extends PaginationConfiguration {
  client: IoTWireless | IoTWirelessClient;
}
