import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTThingsGraphPaginationConfiguration extends PaginationConfiguration {
  client: IoTThingsGraph | IoTThingsGraphClient;
}
