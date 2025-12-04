// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListCopyJobSummariesCommand,
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput,
} from "../commands/ListCopyJobSummariesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCopyJobSummaries: (
  config: BackupPaginationConfiguration,
  input: ListCopyJobSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListCopyJobSummariesCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput
>(BackupClient, ListCopyJobSummariesCommand, "NextToken", "NextToken", "MaxResults");
