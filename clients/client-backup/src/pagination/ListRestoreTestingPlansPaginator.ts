// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreTestingPlansCommand,
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
} from "../commands/ListRestoreTestingPlansCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRestoreTestingPlans: (
  config: BackupPaginationConfiguration,
  input: ListRestoreTestingPlansCommandInput,
  ...rest: any[]
) => Paginator<ListRestoreTestingPlansCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput
>(BackupClient, ListRestoreTestingPlansCommand, "NextToken", "NextToken", "MaxResults");
