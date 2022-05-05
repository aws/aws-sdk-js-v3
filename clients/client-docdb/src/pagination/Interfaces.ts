// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";

export interface DocDBPaginationConfiguration extends PaginationConfiguration {
  client: DocDB | DocDBClient;
}
