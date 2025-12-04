// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListItemsCommand, ListItemsCommandInput, ListItemsCommandOutput } from "../commands/ListItemsCommand";
import { MediaStoreDataClient } from "../MediaStoreDataClient";
import { MediaStoreDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListItems: (
  config: MediaStoreDataPaginationConfiguration,
  input: ListItemsCommandInput,
  ...rest: any[]
) => Paginator<ListItemsCommandOutput> = createPaginator<
  MediaStoreDataPaginationConfiguration,
  ListItemsCommandInput,
  ListItemsCommandOutput
>(MediaStoreDataClient, ListItemsCommand, "NextToken", "NextToken", "MaxResults");
