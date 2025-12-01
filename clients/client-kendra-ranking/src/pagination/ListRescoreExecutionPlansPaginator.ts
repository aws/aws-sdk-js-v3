// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRescoreExecutionPlansCommand,
  ListRescoreExecutionPlansCommandInput,
  ListRescoreExecutionPlansCommandOutput,
} from "../commands/ListRescoreExecutionPlansCommand";
import { KendraRankingClient } from "../KendraRankingClient";
import { KendraRankingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRescoreExecutionPlans: (
  config: KendraRankingPaginationConfiguration,
  input: ListRescoreExecutionPlansCommandInput,
  ...rest: any[]
) => Paginator<ListRescoreExecutionPlansCommandOutput> = createPaginator<
  KendraRankingPaginationConfiguration,
  ListRescoreExecutionPlansCommandInput,
  ListRescoreExecutionPlansCommandOutput
>(KendraRankingClient, ListRescoreExecutionPlansCommand, "NextToken", "NextToken", "MaxResults");
