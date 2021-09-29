import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface RedshiftPaginationConfiguration extends PaginationConfiguration {
  client: Redshift | RedshiftClient;
}
