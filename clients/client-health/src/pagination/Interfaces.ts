// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Health } from "../Health";
import { HealthClient } from "../HealthClient";

export interface HealthPaginationConfiguration extends PaginationConfiguration {
  client: Health | HealthClient;
}
