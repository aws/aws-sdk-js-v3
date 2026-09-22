// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchOmniClient } from "../CloudWatchOmniClient";
import {
  GetTelemetryQueryResultsCommand,
  GetTelemetryQueryResultsCommandInput,
  GetTelemetryQueryResultsCommandOutput,
} from "../commands/GetTelemetryQueryResultsCommand";
import type { CloudWatchOmniPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTelemetryQueryResults: (
  config: CloudWatchOmniPaginationConfiguration,
  input: GetTelemetryQueryResultsCommandInput,
  ...rest: any[]
) => Paginator<GetTelemetryQueryResultsCommandOutput> = createPaginator<
  CloudWatchOmniPaginationConfiguration,
  GetTelemetryQueryResultsCommandInput,
  GetTelemetryQueryResultsCommandOutput
>(CloudWatchOmniClient, GetTelemetryQueryResultsCommand, "nextToken", "nextToken", "maxResults");
