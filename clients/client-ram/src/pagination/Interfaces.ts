// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";

export interface RAMPaginationConfiguration extends PaginationConfiguration {
  client: RAM | RAMClient;
}
