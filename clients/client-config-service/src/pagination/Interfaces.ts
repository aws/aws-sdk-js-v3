// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";

export interface ConfigServicePaginationConfiguration extends PaginationConfiguration {
  client: ConfigService | ConfigServiceClient;
}
