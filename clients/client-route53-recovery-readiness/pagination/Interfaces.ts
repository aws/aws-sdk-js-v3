import { Route53RecoveryReadiness } from "../Route53RecoveryReadiness";
import { Route53RecoveryReadinessClient } from "../Route53RecoveryReadinessClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Route53RecoveryReadinessPaginationConfiguration extends PaginationConfiguration {
  client: Route53RecoveryReadiness | Route53RecoveryReadinessClient;
}
