// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput,
} from "../commands/GetColumnStatisticsTaskRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetColumnStatisticsTaskRuns: (
  config: GluePaginationConfiguration,
  input: GetColumnStatisticsTaskRunsCommandInput,
  ...rest: any[]
) => Paginator<GetColumnStatisticsTaskRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetColumnStatisticsTaskRunsCommandInput,
  GetColumnStatisticsTaskRunsCommandOutput
>(GlueClient, GetColumnStatisticsTaskRunsCommand, "NextToken", "NextToken", "MaxResults");
