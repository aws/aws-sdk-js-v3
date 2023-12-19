// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMetricSetsCommand,
  ListMetricSetsCommandInput,
  ListMetricSetsCommandOutput,
} from "../commands/ListMetricSetsCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetricSets: (
  config: LookoutMetricsPaginationConfiguration,
  input: ListMetricSetsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricSetsCommandOutput> = createPaginator<
  LookoutMetricsPaginationConfiguration,
  ListMetricSetsCommandInput,
  ListMetricSetsCommandOutput
>(LookoutMetricsClient, ListMetricSetsCommand, "NextToken", "NextToken", "MaxResults");
