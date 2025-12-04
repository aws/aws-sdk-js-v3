// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetContentsCommand,
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "../commands/ListDatasetContentsCommand";
import { IoTAnalyticsClient } from "../IoTAnalyticsClient";
import { IoTAnalyticsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetContents: (
  config: IoTAnalyticsPaginationConfiguration,
  input: ListDatasetContentsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetContentsCommandOutput> = createPaginator<
  IoTAnalyticsPaginationConfiguration,
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput
>(IoTAnalyticsClient, ListDatasetContentsCommand, "nextToken", "nextToken", "maxResults");
