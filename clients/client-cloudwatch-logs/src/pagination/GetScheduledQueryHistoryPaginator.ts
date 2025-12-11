// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  GetScheduledQueryHistoryCommand,
  GetScheduledQueryHistoryCommandInput,
  GetScheduledQueryHistoryCommandOutput,
} from "../commands/GetScheduledQueryHistoryCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetScheduledQueryHistory: (
  config: CloudWatchLogsPaginationConfiguration,
  input: GetScheduledQueryHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetScheduledQueryHistoryCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  GetScheduledQueryHistoryCommandInput,
  GetScheduledQueryHistoryCommandOutput
>(CloudWatchLogsClient, GetScheduledQueryHistoryCommand, "nextToken", "nextToken", "maxResults");
