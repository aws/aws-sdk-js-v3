// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupSearchClient } from "../BackupSearchClient";
import {
  ListSearchJobBackupsCommand,
  ListSearchJobBackupsCommandInput,
  ListSearchJobBackupsCommandOutput,
} from "../commands/ListSearchJobBackupsCommand";
import { BackupSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSearchJobBackups: (
  config: BackupSearchPaginationConfiguration,
  input: ListSearchJobBackupsCommandInput,
  ...rest: any[]
) => Paginator<ListSearchJobBackupsCommandOutput> = createPaginator<
  BackupSearchPaginationConfiguration,
  ListSearchJobBackupsCommandInput,
  ListSearchJobBackupsCommandOutput
>(BackupSearchClient, ListSearchJobBackupsCommand, "NextToken", "NextToken", "MaxResults");
