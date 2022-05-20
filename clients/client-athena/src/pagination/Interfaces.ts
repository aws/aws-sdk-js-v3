// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";

export interface AthenaPaginationConfiguration extends PaginationConfiguration {
  client: Athena | AthenaClient;
}
