// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreTestingSelectionsCommand,
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
} from "../commands/ListRestoreTestingSelectionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRestoreTestingSelections: (
  config: BackupPaginationConfiguration,
  input: ListRestoreTestingSelectionsCommandInput,
  ...rest: any[]
) => Paginator<ListRestoreTestingSelectionsCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput
>(BackupClient, ListRestoreTestingSelectionsCommand, "NextToken", "NextToken", "MaxResults");
