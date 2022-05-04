// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";

export interface SecurityHubPaginationConfiguration extends PaginationConfiguration {
  client: SecurityHub | SecurityHubClient;
}
