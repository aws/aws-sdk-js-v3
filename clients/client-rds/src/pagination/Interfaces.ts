// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";

export interface RDSPaginationConfiguration extends PaginationConfiguration {
  client: RDS | RDSClient;
}
