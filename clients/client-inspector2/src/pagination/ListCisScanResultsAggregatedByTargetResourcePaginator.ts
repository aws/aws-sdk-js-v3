// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCisScanResultsAggregatedByTargetResourceCommand,
  ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ListCisScanResultsAggregatedByTargetResourceCommandOutput,
} from "../commands/ListCisScanResultsAggregatedByTargetResourceCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCisScanResultsAggregatedByTargetResource: (
  config: Inspector2PaginationConfiguration,
  input: ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ...rest: any[]
) => Paginator<ListCisScanResultsAggregatedByTargetResourceCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ListCisScanResultsAggregatedByTargetResourceCommandOutput
>(Inspector2Client, ListCisScanResultsAggregatedByTargetResourceCommand, "nextToken", "nextToken", "maxResults");
