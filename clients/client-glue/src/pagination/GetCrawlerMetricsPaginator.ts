// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCrawlerMetricsCommand,
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput,
} from "../commands/GetCrawlerMetricsCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCrawlerMetrics: (
  config: GluePaginationConfiguration,
  input: GetCrawlerMetricsCommandInput,
  ...rest: any[]
) => Paginator<GetCrawlerMetricsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetCrawlerMetricsCommandInput,
  GetCrawlerMetricsCommandOutput
>(GlueClient, GetCrawlerMetricsCommand, "NextToken", "NextToken", "MaxResults");
