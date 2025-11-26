// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  BatchGetRumMetricDefinitionsCommand,
  BatchGetRumMetricDefinitionsCommandInput,
  BatchGetRumMetricDefinitionsCommandOutput,
} from "../commands/BatchGetRumMetricDefinitionsCommand";
import { RUMClient } from "../RUMClient";
import { RUMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateBatchGetRumMetricDefinitions: (
  config: RUMPaginationConfiguration,
  input: BatchGetRumMetricDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<BatchGetRumMetricDefinitionsCommandOutput> = createPaginator<
  RUMPaginationConfiguration,
  BatchGetRumMetricDefinitionsCommandInput,
  BatchGetRumMetricDefinitionsCommandOutput
>(RUMClient, BatchGetRumMetricDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
