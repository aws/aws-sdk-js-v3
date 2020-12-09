import { GlobalAccelerator } from "../GlobalAccelerator";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface GlobalAcceleratorPaginationConfiguration extends PaginationConfiguration {
  client: GlobalAccelerator | GlobalAcceleratorClient;
}
