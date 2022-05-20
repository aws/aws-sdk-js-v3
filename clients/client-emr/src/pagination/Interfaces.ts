// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";

export interface EMRPaginationConfiguration extends PaginationConfiguration {
  client: EMR | EMRClient;
}
