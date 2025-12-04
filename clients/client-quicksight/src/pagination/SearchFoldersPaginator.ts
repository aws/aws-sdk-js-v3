// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchFoldersCommand,
  SearchFoldersCommandInput,
  SearchFoldersCommandOutput,
} from "../commands/SearchFoldersCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchFolders: (
  config: QuickSightPaginationConfiguration,
  input: SearchFoldersCommandInput,
  ...rest: any[]
) => Paginator<SearchFoldersCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchFoldersCommandInput,
  SearchFoldersCommandOutput
>(QuickSightClient, SearchFoldersCommand, "NextToken", "NextToken", "MaxResults");
