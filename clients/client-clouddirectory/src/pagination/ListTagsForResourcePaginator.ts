// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagsForResource: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListTagsForResourceCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
>(CloudDirectoryClient, ListTagsForResourceCommand, "NextToken", "NextToken", "MaxResults");
