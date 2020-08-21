import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface PinpointEmailPaginationConfiguration extends PaginationConfiguration {
  client: PinpointEmail | PinpointEmailClient;
}
