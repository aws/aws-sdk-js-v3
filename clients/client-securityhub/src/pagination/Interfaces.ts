import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SecurityHubPaginationConfiguration extends PaginationConfiguration {
  client: SecurityHub | SecurityHubClient;
}
