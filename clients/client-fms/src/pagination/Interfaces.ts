// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";

export interface FMSPaginationConfiguration extends PaginationConfiguration {
  client: FMS | FMSClient;
}
