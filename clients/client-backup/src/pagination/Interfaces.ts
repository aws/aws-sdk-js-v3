import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface BackupPaginationConfiguration extends PaginationConfiguration {
  client: Backup | BackupClient;
}
