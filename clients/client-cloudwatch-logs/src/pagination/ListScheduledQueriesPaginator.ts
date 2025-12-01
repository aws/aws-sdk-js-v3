// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListScheduledQueriesCommand,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "../commands/ListScheduledQueriesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScheduledQueries: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListScheduledQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListScheduledQueriesCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput
>(CloudWatchLogsClient, ListScheduledQueriesCommand, "nextToken", "nextToken", "maxResults");
