// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Route53RecoveryCluster } from "../Route53RecoveryCluster";
import { Route53RecoveryClusterClient } from "../Route53RecoveryClusterClient";

export interface Route53RecoveryClusterPaginationConfiguration extends PaginationConfiguration {
  client: Route53RecoveryCluster | Route53RecoveryClusterClient;
}
