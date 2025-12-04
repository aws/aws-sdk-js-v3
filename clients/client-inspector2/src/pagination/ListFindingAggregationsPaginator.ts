// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingAggregationsCommand,
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "../commands/ListFindingAggregationsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindingAggregations: (
  config: Inspector2PaginationConfiguration,
  input: ListFindingAggregationsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingAggregationsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput
>(Inspector2Client, ListFindingAggregationsCommand, "nextToken", "nextToken", "maxResults");
