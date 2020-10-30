import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface RDSPaginationConfiguration extends PaginationConfiguration {
  client: RDS | RDSClient;
}
