import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface RedshiftDataPaginationConfiguration extends PaginationConfiguration {
  client: RedshiftData | RedshiftDataClient;
}
