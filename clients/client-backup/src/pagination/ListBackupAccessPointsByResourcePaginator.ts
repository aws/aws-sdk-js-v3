// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupAccessPointsByResourceCommand,
  ListBackupAccessPointsByResourceCommandInput,
  ListBackupAccessPointsByResourceCommandOutput,
} from "../commands/ListBackupAccessPointsByResourceCommand";
import type { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupAccessPointsByResource: (
  config: BackupPaginationConfiguration,
  input: ListBackupAccessPointsByResourceCommandInput,
  ...rest: any[]
) => Paginator<ListBackupAccessPointsByResourceCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupAccessPointsByResourceCommandInput,
  ListBackupAccessPointsByResourceCommandOutput
>(BackupClient, ListBackupAccessPointsByResourceCommand, "NextToken", "NextToken", "MaxResults");
