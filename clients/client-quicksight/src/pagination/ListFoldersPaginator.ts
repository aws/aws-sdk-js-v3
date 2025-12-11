// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFoldersCommand, ListFoldersCommandInput, ListFoldersCommandOutput } from "../commands/ListFoldersCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFolders: (
  config: QuickSightPaginationConfiguration,
  input: ListFoldersCommandInput,
  ...rest: any[]
) => Paginator<ListFoldersCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListFoldersCommandInput,
  ListFoldersCommandOutput
>(QuickSightClient, ListFoldersCommand, "NextToken", "NextToken", "MaxResults");
