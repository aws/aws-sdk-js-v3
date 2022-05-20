// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";

export interface AuditManagerPaginationConfiguration extends PaginationConfiguration {
  client: AuditManager | AuditManagerClient;
}
