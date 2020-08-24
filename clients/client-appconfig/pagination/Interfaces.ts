import { AppConfig } from "../AppConfig";
import { AppConfigClient } from "../AppConfigClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AppConfigPaginationConfiguration extends PaginationConfiguration {
  client: AppConfig | AppConfigClient;
}
