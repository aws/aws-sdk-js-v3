// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";

export interface IoTThingsGraphPaginationConfiguration extends PaginationConfiguration {
  client: IoTThingsGraph | IoTThingsGraphClient;
}
