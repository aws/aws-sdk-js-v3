import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Route53PaginationConfiguration extends PaginationConfiguration {
  client: Route53 | Route53Client;
}
