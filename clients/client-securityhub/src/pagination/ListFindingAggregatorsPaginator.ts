// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFindingAggregatorsCommand,
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "../commands/ListFindingAggregatorsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFindingAggregators: (
  config: SecurityHubPaginationConfiguration,
  input: ListFindingAggregatorsCommandInput,
  ...rest: any[]
) => Paginator<ListFindingAggregatorsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput
>(SecurityHubClient, ListFindingAggregatorsCommand, "NextToken", "NextToken", "MaxResults");
