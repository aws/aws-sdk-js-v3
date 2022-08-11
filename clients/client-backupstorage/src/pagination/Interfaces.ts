// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { BackupStorage } from "../BackupStorage";
import { BackupStorageClient } from "../BackupStorageClient";

export interface BackupStoragePaginationConfiguration extends PaginationConfiguration {
  client: BackupStorage | BackupStorageClient;
}
