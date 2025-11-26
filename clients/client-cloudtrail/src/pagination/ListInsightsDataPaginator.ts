// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListInsightsDataCommand,
  ListInsightsDataCommandInput,
  ListInsightsDataCommandOutput,
} from "../commands/ListInsightsDataCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInsightsData: (
  config: CloudTrailPaginationConfiguration,
  input: ListInsightsDataCommandInput,
  ...rest: any[]
) => Paginator<ListInsightsDataCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListInsightsDataCommandInput,
  ListInsightsDataCommandOutput
>(CloudTrailClient, ListInsightsDataCommand, "NextToken", "NextToken", "MaxResults");
