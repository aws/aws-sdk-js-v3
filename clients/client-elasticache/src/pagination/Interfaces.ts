// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";

export interface ElastiCachePaginationConfiguration extends PaginationConfiguration {
  client: ElastiCache | ElastiCacheClient;
}
