// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatastoresCommand,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
} from "../commands/ListDatastoresCommand";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatastores: (
  config: IoTAnalyticsPaginationConfiguration,
  input: ListDatastoresCommandInput,
  ...rest: any[]
) => Paginator<ListDatastoresCommandOutput> = createPaginator<
  IoTAnalyticsPaginationConfiguration,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput
>(IoTAnalyticsClient, ListDatastoresCommand, "nextToken", "nextToken", "maxResults");
