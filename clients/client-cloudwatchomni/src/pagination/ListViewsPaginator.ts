// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import { ListViewsCommand, ListViewsCommandInput, ListViewsCommandOutput } from "../commands/ListViewsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListViews: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListViewsCommandInput,
  ...rest: any[]
) => Paginator<ListViewsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListViewsCommandInput,
  ListViewsCommandOutput
>(CloudWatchOmniClient, ListViewsCommand, "nextToken", "nextToken", "maxResults");
