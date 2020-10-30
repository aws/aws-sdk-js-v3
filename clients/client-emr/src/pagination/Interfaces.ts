import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface EMRPaginationConfiguration extends PaginationConfiguration {
  client: EMR | EMRClient;
}
