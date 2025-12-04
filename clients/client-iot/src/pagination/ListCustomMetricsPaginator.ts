// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomMetricsCommand,
  ListCustomMetricsCommandInput,
  ListCustomMetricsCommandOutput,
} from "../commands/ListCustomMetricsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomMetrics: (
  config: IoTPaginationConfiguration,
  input: ListCustomMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomMetricsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListCustomMetricsCommandInput,
  ListCustomMetricsCommandOutput
>(IoTClient, ListCustomMetricsCommand, "nextToken", "nextToken", "maxResults");
