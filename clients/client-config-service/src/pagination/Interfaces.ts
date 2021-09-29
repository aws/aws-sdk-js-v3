import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ConfigServicePaginationConfiguration extends PaginationConfiguration {
  client: ConfigService | ConfigServiceClient;
}
