// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListViewsCommand, ListViewsCommandInput, ListViewsCommandOutput } from "../commands/ListViewsCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListViews: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListViewsCommandInput,
  ...rest: any[]
) => Paginator<ListViewsCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListViewsCommandInput,
  ListViewsCommandOutput
>(ResourceExplorer2Client, ListViewsCommand, "NextToken", "NextToken", "MaxResults");
