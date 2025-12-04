// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMetricValuesCommand,
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput,
} from "../commands/ListMetricValuesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetricValues: (
  config: IoTPaginationConfiguration,
  input: ListMetricValuesCommandInput,
  ...rest: any[]
) => Paginator<ListMetricValuesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput
>(IoTClient, ListMetricValuesCommand, "nextToken", "nextToken", "maxResults");
