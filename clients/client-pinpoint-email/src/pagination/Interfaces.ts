// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";

export interface PinpointEmailPaginationConfiguration extends PaginationConfiguration {
  client: PinpointEmail | PinpointEmailClient;
}
