// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";

export interface Route53PaginationConfiguration extends PaginationConfiguration {
  client: Route53 | Route53Client;
}
