import { IoTSecureTunneling } from "../IoTSecureTunneling";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTSecureTunnelingPaginationConfiguration extends PaginationConfiguration {
  client: IoTSecureTunneling | IoTSecureTunnelingClient;
}
