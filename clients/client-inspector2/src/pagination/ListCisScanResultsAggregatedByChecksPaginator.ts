// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCisScanResultsAggregatedByChecksCommand,
  ListCisScanResultsAggregatedByChecksCommandInput,
  ListCisScanResultsAggregatedByChecksCommandOutput,
} from "../commands/ListCisScanResultsAggregatedByChecksCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCisScanResultsAggregatedByChecks: (
  config: Inspector2PaginationConfiguration,
  input: ListCisScanResultsAggregatedByChecksCommandInput,
  ...rest: any[]
) => Paginator<ListCisScanResultsAggregatedByChecksCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListCisScanResultsAggregatedByChecksCommandInput,
  ListCisScanResultsAggregatedByChecksCommandOutput
>(Inspector2Client, ListCisScanResultsAggregatedByChecksCommand, "nextToken", "nextToken", "maxResults");
