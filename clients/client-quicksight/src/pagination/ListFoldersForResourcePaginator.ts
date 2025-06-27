// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListFoldersForResourceCommand,
  ListFoldersForResourceCommandInput,
  ListFoldersForResourceCommandOutput,
} from "../commands/ListFoldersForResourceCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFoldersForResource: (
  config: QuickSightPaginationConfiguration,
  input: ListFoldersForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListFoldersForResourceCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListFoldersForResourceCommandInput,
  ListFoldersForResourceCommandOutput
>(QuickSightClient, ListFoldersForResourceCommand, "NextToken", "NextToken", "MaxResults");
