// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupSelectionsCommand,
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "../commands/ListBackupSelectionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupSelections: (
  config: BackupPaginationConfiguration,
  input: ListBackupSelectionsCommandInput,
  ...rest: any[]
) => Paginator<ListBackupSelectionsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput
>(BackupClient, ListBackupSelectionsCommand, "NextToken", "NextToken", "MaxResults");
