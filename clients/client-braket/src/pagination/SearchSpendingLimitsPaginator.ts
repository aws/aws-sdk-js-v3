// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BraketClient } from "../BraketClient";
import {
  SearchSpendingLimitsCommand,
  SearchSpendingLimitsCommandInput,
  SearchSpendingLimitsCommandOutput,
} from "../commands/SearchSpendingLimitsCommand";
import { BraketPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSpendingLimits: (
  config: BraketPaginationConfiguration,
  input: SearchSpendingLimitsCommandInput,
  ...rest: any[]
) => Paginator<SearchSpendingLimitsCommandOutput> = createPaginator<
  BraketPaginationConfiguration,
  SearchSpendingLimitsCommandInput,
  SearchSpendingLimitsCommandOutput
>(BraketClient, SearchSpendingLimitsCommand, "nextToken", "nextToken", "maxResults");
