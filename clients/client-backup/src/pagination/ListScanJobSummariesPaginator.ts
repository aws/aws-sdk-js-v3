// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListScanJobSummariesCommand,
  ListScanJobSummariesCommandInput,
  ListScanJobSummariesCommandOutput,
} from "../commands/ListScanJobSummariesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScanJobSummaries: (
  config: BackupPaginationConfiguration,
  input: ListScanJobSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListScanJobSummariesCommandOutput> = createPaginator<
  BackupPaginationConfiguration,
  ListScanJobSummariesCommandInput,
  ListScanJobSummariesCommandOutput
>(BackupClient, ListScanJobSummariesCommand, "NextToken", "NextToken", "MaxResults");
