// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  ListTelemetryQuerySessionsCommand,
  ListTelemetryQuerySessionsCommandInput,
  ListTelemetryQuerySessionsCommandOutput,
} from "../commands/ListTelemetryQuerySessionsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTelemetryQuerySessions: (
  config: CloudWatchOmniPaginationConfiguration,
  input: ListTelemetryQuerySessionsCommandInput,
  ...rest: any[]
) => Paginator<ListTelemetryQuerySessionsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  ListTelemetryQuerySessionsCommandInput,
  ListTelemetryQuerySessionsCommandOutput
>(CloudWatchOmniClient, ListTelemetryQuerySessionsCommand, "nextToken", "nextToken", "maxResults");
