// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  GetLogEventsCommand,
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
} from "../commands/GetLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLogEvents: (
  config: CloudWatchLogsPaginationConfiguration,
  input: GetLogEventsCommandInput,
  ...rest: any[]
) => Paginator<GetLogEventsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput
>(CloudWatchLogsClient, GetLogEventsCommand, "nextToken", "nextForwardToken", "limit");
