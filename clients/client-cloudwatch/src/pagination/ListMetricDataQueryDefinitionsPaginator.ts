// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListMetricDataQueryDefinitionsCommand,
  ListMetricDataQueryDefinitionsCommandInput,
  ListMetricDataQueryDefinitionsCommandOutput,
} from "../commands/ListMetricDataQueryDefinitionsCommand";
import type { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetricDataQueryDefinitions: (
  config: CloudWatchPaginationConfiguration,
  input: ListMetricDataQueryDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricDataQueryDefinitionsCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  ListMetricDataQueryDefinitionsCommandInput,
  ListMetricDataQueryDefinitionsCommandOutput
>(CloudWatchClient, ListMetricDataQueryDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
