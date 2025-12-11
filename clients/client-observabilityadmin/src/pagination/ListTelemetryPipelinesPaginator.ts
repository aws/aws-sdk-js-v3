// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTelemetryPipelinesCommand,
  ListTelemetryPipelinesCommandInput,
  ListTelemetryPipelinesCommandOutput,
} from "../commands/ListTelemetryPipelinesCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTelemetryPipelines: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListTelemetryPipelinesCommandInput,
  ...rest: any[]
) => Paginator<ListTelemetryPipelinesCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListTelemetryPipelinesCommandInput,
  ListTelemetryPipelinesCommandOutput
>(ObservabilityAdminClient, ListTelemetryPipelinesCommand, "NextToken", "NextToken", "MaxResults");
