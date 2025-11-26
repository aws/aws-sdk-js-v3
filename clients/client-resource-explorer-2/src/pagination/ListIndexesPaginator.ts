// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListIndexesCommand, ListIndexesCommandInput, ListIndexesCommandOutput } from "../commands/ListIndexesCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndexes: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListIndexesCommandInput,
  ...rest: any[]
) => Paginator<ListIndexesCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListIndexesCommandInput,
  ListIndexesCommandOutput
>(ResourceExplorer2Client, ListIndexesCommand, "NextToken", "NextToken", "MaxResults");
