import { TimestreamWrite } from "../TimestreamWrite";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface TimestreamWritePaginationConfiguration extends PaginationConfiguration {
  client: TimestreamWrite | TimestreamWriteClient;
}
