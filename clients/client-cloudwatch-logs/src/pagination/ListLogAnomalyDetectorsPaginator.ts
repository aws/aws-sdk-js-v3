// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListLogAnomalyDetectorsCommand,
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
} from "../commands/ListLogAnomalyDetectorsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLogAnomalyDetectors: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListLogAnomalyDetectorsCommandInput,
  ...rest: any[]
) => Paginator<ListLogAnomalyDetectorsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput
>(CloudWatchLogsClient, ListLogAnomalyDetectorsCommand, "nextToken", "nextToken", "limit");
