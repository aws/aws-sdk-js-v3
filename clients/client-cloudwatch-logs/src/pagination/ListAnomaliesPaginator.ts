// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListAnomaliesCommand,
  ListAnomaliesCommandInput,
  ListAnomaliesCommandOutput,
} from "../commands/ListAnomaliesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalies: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListAnomaliesCommandInput,
  ...rest: any[]
) => Paginator<ListAnomaliesCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  ListAnomaliesCommandInput,
  ListAnomaliesCommandOutput
>(CloudWatchLogsClient, ListAnomaliesCommand, "nextToken", "nextToken", "limit");
