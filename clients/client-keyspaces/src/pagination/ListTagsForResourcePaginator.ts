// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagsForResource: (
  config: KeyspacesPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListTagsForResourceCommandOutput> = createPaginator<
  KeyspacesPaginationConfiguration,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
>(KeyspacesClient, ListTagsForResourceCommand, "nextToken", "nextToken", "maxResults");
