// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoverageStatisticsCommand,
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "../commands/ListCoverageStatisticsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoverageStatistics: (
  config: Inspector2PaginationConfiguration,
  input: ListCoverageStatisticsCommandInput,
  ...rest: any[]
) => Paginator<ListCoverageStatisticsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput
>(Inspector2Client, ListCoverageStatisticsCommand, "nextToken", "nextToken", "");
