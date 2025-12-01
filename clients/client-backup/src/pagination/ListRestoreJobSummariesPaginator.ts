// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreJobSummariesCommand,
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput,
} from "../commands/ListRestoreJobSummariesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRestoreJobSummaries: (
  config: BackupPaginationConfiguration,
  input: ListRestoreJobSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListRestoreJobSummariesCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput
>(BackupClient, ListRestoreJobSummariesCommand, "NextToken", "NextToken", "MaxResults");
