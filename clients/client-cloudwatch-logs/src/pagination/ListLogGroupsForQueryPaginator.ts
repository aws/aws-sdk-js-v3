// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListLogGroupsForQueryCommand,
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "../commands/ListLogGroupsForQueryCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLogGroupsForQuery: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListLogGroupsForQueryCommandInput,
  ...rest: any[]
) => Paginator<ListLogGroupsForQueryCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput
>(CloudWatchLogsClient, ListLogGroupsForQueryCommand, "nextToken", "nextToken", "maxResults");
