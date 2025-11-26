// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  FilterLogEventsCommand,
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput,
} from "../commands/FilterLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateFilterLogEvents: (
  config: CloudWatchLogsPaginationConfiguration,
  input: FilterLogEventsCommandInput,
  ...rest: any[]
) => Paginator<FilterLogEventsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput
>(CloudWatchLogsClient, FilterLogEventsCommand, "nextToken", "nextToken", "limit");
