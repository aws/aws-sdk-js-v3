// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListViewsCommand, ListViewsCommandInput, ListViewsCommandOutput } from "../commands/ListViewsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListViews: (
  config: ConnectPaginationConfiguration,
  input: ListViewsCommandInput,
  ...rest: any[]
) => Paginator<ListViewsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListViewsCommandInput,
  ListViewsCommandOutput
>(ConnectClient, ListViewsCommand, "NextToken", "NextToken", "MaxResults");
