// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { QLDB } from "../QLDB";
import { QLDBClient } from "../QLDBClient";

export interface QLDBPaginationConfiguration extends PaginationConfiguration {
  client: QLDB | QLDBClient;
}
