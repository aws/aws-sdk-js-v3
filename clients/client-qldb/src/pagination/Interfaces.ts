import { QLDB } from "../QLDB";
import { QLDBClient } from "../QLDBClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface QLDBPaginationConfiguration extends PaginationConfiguration {
  client: QLDB | QLDBClient;
}
