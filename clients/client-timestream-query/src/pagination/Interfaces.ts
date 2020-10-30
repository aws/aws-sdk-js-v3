import { TimestreamQuery } from "../TimestreamQuery";
import { TimestreamQueryClient } from "../TimestreamQueryClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface TimestreamQueryPaginationConfiguration extends PaginationConfiguration {
  client: TimestreamQuery | TimestreamQueryClient;
}
