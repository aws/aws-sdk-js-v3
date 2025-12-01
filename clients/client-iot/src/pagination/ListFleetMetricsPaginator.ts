// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFleetMetricsCommand,
  ListFleetMetricsCommandInput,
  ListFleetMetricsCommandOutput,
} from "../commands/ListFleetMetricsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFleetMetrics: (
  config: IoTPaginationConfiguration,
  input: ListFleetMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListFleetMetricsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListFleetMetricsCommandInput,
  ListFleetMetricsCommandOutput
>(IoTClient, ListFleetMetricsCommand, "nextToken", "nextToken", "maxResults");
