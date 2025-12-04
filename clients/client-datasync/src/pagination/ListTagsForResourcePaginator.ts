// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagsForResource: (
  config: DataSyncPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListTagsForResourceCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
>(DataSyncClient, ListTagsForResourceCommand, "NextToken", "NextToken", "MaxResults");
