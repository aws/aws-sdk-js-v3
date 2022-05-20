// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";

export interface BackupPaginationConfiguration extends PaginationConfiguration {
  client: Backup | BackupClient;
}
