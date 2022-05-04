// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Shield } from "../Shield";
import { ShieldClient } from "../ShieldClient";

export interface ShieldPaginationConfiguration extends PaginationConfiguration {
  client: Shield | ShieldClient;
}
