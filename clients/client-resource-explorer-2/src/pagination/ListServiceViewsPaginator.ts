// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceViewsCommand,
  ListServiceViewsCommandInput,
  ListServiceViewsCommandOutput,
} from "../commands/ListServiceViewsCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceViews: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListServiceViewsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceViewsCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListServiceViewsCommandInput,
  ListServiceViewsCommandOutput
>(ResourceExplorer2Client, ListServiceViewsCommand, "NextToken", "NextToken", "MaxResults");
