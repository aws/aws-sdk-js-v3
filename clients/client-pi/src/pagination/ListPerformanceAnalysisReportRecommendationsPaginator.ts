// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPerformanceAnalysisReportRecommendationsCommand,
  ListPerformanceAnalysisReportRecommendationsCommandInput,
  ListPerformanceAnalysisReportRecommendationsCommandOutput,
} from "../commands/ListPerformanceAnalysisReportRecommendationsCommand";
import { PIClient } from "../PIClient";
import type { PIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPerformanceAnalysisReportRecommendations: (
  config: PIPaginationConfiguration,
  input: ListPerformanceAnalysisReportRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListPerformanceAnalysisReportRecommendationsCommandOutput> = createPaginator<
  PIPaginationConfiguration,
  ListPerformanceAnalysisReportRecommendationsCommandInput,
  ListPerformanceAnalysisReportRecommendationsCommandOutput
>(PIClient, ListPerformanceAnalysisReportRecommendationsCommand, "NextToken", "NextToken", "MaxResults");
