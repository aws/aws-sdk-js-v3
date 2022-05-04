// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoTWireless } from "../IoTWireless";
import { IoTWirelessClient } from "../IoTWirelessClient";

export interface IoTWirelessPaginationConfiguration extends PaginationConfiguration {
  client: IoTWireless | IoTWirelessClient;
}
