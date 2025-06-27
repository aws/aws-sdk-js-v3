// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BackupSearchClient } from "../BackupSearchClient";
import {
  ListSearchJobResultsCommand,
  ListSearchJobResultsCommandInput,
  ListSearchJobResultsCommandOutput,
} from "../commands/ListSearchJobResultsCommand";
import { BackupSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSearchJobResults: (
  config: BackupSearchPaginationConfiguration,
  input: ListSearchJobResultsCommandInput,
  ...rest: any[]
) => Paginator<ListSearchJobResultsCommandOutput> = createPaginator<
  BackupSearchPaginationConfiguration,
  ListSearchJobResultsCommandInput,
  ListSearchJobResultsCommandOutput
>(BackupSearchClient, ListSearchJobResultsCommand, "NextToken", "NextToken", "MaxResults");
