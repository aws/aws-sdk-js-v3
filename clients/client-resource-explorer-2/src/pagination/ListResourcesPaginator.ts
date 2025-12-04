// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResources: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListResourcesCommandInput,
  ListResourcesCommandOutput
>(ResourceExplorer2Client, ListResourcesCommand, "NextToken", "NextToken", "MaxResults");
