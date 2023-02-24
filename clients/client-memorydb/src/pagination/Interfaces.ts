// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MemoryDB } from "../MemoryDB";
import { MemoryDBClient } from "../MemoryDBClient";

export interface MemoryDBPaginationConfiguration extends PaginationConfiguration {
  client: MemoryDB | MemoryDBClient;
}
