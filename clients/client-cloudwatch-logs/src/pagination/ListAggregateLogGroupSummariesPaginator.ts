// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListAggregateLogGroupSummariesCommand,
  ListAggregateLogGroupSummariesCommandInput,
  ListAggregateLogGroupSummariesCommandOutput,
} from "../commands/ListAggregateLogGroupSummariesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAggregateLogGroupSummaries: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListAggregateLogGroupSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListAggregateLogGroupSummariesCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  ListAggregateLogGroupSummariesCommandInput,
  ListAggregateLogGroupSummariesCommandOutput
>(CloudWatchLogsClient, ListAggregateLogGroupSummariesCommand, "nextToken", "nextToken", "limit");
