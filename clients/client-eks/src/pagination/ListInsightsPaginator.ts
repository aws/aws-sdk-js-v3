// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInsightsCommand,
  ListInsightsCommandInput,
  ListInsightsCommandOutput,
} from "../commands/ListInsightsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInsights: (
  config: EKSPaginationConfiguration,
  input: ListInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListInsightsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListInsightsCommandInput,
  ListInsightsCommandOutput
>(EKSClient, ListInsightsCommand, "nextToken", "nextToken", "maxResults");
