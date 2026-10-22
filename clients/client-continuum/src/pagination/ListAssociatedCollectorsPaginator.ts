// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssociatedCollectorsCommand,
  ListAssociatedCollectorsCommandInput,
  ListAssociatedCollectorsCommandOutput,
} from "../commands/ListAssociatedCollectorsCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedCollectors: (
  config: ContinuumPaginationConfiguration,
  input: ListAssociatedCollectorsCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedCollectorsCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListAssociatedCollectorsCommandInput,
  ListAssociatedCollectorsCommandOutput
>(ContinuumClient, ListAssociatedCollectorsCommand, "nextToken", "nextToken", "maxResults");
