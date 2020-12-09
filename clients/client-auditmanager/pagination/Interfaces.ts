import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AuditManagerPaginationConfiguration extends PaginationConfiguration {
  client: AuditManager | AuditManagerClient;
}
