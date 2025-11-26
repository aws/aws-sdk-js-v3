// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetImportJobs: (
  config: ForecastPaginationConfiguration,
  input: ListDatasetImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetImportJobsCommandOutput> = createPaginator<
  ForecastPaginationConfiguration,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput
>(ForecastClient, ListDatasetImportJobsCommand, "NextToken", "NextToken", "MaxResults");
