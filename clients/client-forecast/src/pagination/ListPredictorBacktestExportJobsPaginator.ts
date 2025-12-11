// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPredictorBacktestExportJobsCommand,
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "../commands/ListPredictorBacktestExportJobsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPredictorBacktestExportJobs: (
  config: ForecastPaginationConfiguration,
  input: ListPredictorBacktestExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListPredictorBacktestExportJobsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput
>(ForecastClient, ListPredictorBacktestExportJobsCommand, "NextToken", "NextToken", "MaxResults");
