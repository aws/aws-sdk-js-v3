// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";

export interface ConnectPaginationConfiguration extends PaginationConfiguration {
  client: Connect | ConnectClient;
}
