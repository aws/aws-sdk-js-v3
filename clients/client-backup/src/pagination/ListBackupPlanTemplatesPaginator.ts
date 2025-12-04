// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBackupPlanTemplates: (
  config: BackupPaginationConfiguration,
  input: ListBackupPlanTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListBackupPlanTemplatesCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput
>(BackupClient, ListBackupPlanTemplatesCommand, "NextToken", "NextToken", "MaxResults");
