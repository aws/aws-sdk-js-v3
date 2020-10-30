import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DocDBPaginationConfiguration extends PaginationConfiguration {
  client: DocDB | DocDBClient;
}
