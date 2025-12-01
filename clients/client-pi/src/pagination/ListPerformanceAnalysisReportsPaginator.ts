// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPerformanceAnalysisReportsCommand,
  ListPerformanceAnalysisReportsCommandInput,
  ListPerformanceAnalysisReportsCommandOutput,
} from "../commands/ListPerformanceAnalysisReportsCommand";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPerformanceAnalysisReports: (
  config: PIPaginationConfiguration,
  input: ListPerformanceAnalysisReportsCommandInput,
  ...rest: any[]
) => Paginator<ListPerformanceAnalysisReportsCommandOutput> = createPaginator<
  PIPaginationConfiguration,
  ListPerformanceAnalysisReportsCommandInput,
  ListPerformanceAnalysisReportsCommandOutput
>(PIClient, ListPerformanceAnalysisReportsCommand, "NextToken", "NextToken", "MaxResults");
