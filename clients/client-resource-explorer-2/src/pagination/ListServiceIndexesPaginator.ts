// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceIndexesCommand,
  ListServiceIndexesCommandInput,
  ListServiceIndexesCommandOutput,
} from "../commands/ListServiceIndexesCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceIndexes: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListServiceIndexesCommandInput,
  ...rest: any[]
) => Paginator<ListServiceIndexesCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListServiceIndexesCommandInput,
  ListServiceIndexesCommandOutput
>(ResourceExplorer2Client, ListServiceIndexesCommand, "NextToken", "NextToken", "MaxResults");
