// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoTSecureTunneling } from "../IoTSecureTunneling";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient";

export interface IoTSecureTunnelingPaginationConfiguration extends PaginationConfiguration {
  client: IoTSecureTunneling | IoTSecureTunnelingClient;
}
