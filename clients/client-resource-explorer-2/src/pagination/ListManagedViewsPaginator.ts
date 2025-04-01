// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListManagedViewsCommand,
  ListManagedViewsCommandInput,
  ListManagedViewsCommandOutput,
} from "../commands/ListManagedViewsCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedViews: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListManagedViewsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedViewsCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListManagedViewsCommandInput,
  ListManagedViewsCommandOutput
>(ResourceExplorer2Client, ListManagedViewsCommand, "NextToken", "NextToken", "MaxResults");
