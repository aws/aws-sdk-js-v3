import { Route53RecoveryControlConfig } from "../Route53RecoveryControlConfig";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Route53RecoveryControlConfigPaginationConfiguration extends PaginationConfiguration {
  client: Route53RecoveryControlConfig | Route53RecoveryControlConfigClient;
}
