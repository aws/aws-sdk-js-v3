// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListForecastExportJobsCommand,
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "../commands/ListForecastExportJobsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListForecastExportJobs: (
  config: ForecastPaginationConfiguration,
  input: ListForecastExportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListForecastExportJobsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput
>(ForecastClient, ListForecastExportJobsCommand, "NextToken", "NextToken", "MaxResults");
