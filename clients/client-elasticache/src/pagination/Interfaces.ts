import { ElastiCache } from "../ElastiCache";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ElastiCachePaginationConfiguration extends PaginationConfiguration {
  client: ElastiCache | ElastiCacheClient;
}
