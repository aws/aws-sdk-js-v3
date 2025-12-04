// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLibraryItemsCommand,
  ListLibraryItemsCommandInput,
  ListLibraryItemsCommandOutput,
} from "../commands/ListLibraryItemsCommand";
import { QAppsClient } from "../QAppsClient";
import { QAppsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLibraryItems: (
  config: QAppsPaginationConfiguration,
  input: ListLibraryItemsCommandInput,
  ...rest: any[]
) => Paginator<ListLibraryItemsCommandOutput> = createPaginator<
  QAppsPaginationConfiguration,
  ListLibraryItemsCommandInput,
  ListLibraryItemsCommandOutput
>(QAppsClient, ListLibraryItemsCommand, "nextToken", "nextToken", "limit");
