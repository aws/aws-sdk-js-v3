// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListColumnStatisticsTaskRunsCommand,
  ListColumnStatisticsTaskRunsCommandInput,
  ListColumnStatisticsTaskRunsCommandOutput,
} from "../commands/ListColumnStatisticsTaskRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListColumnStatisticsTaskRuns: (
  config: GluePaginationConfiguration,
  input: ListColumnStatisticsTaskRunsCommandInput,
  ...rest: any[]
) => Paginator<ListColumnStatisticsTaskRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListColumnStatisticsTaskRunsCommandInput,
  ListColumnStatisticsTaskRunsCommandOutput
>(GlueClient, ListColumnStatisticsTaskRunsCommand, "NextToken", "NextToken", "MaxResults");
