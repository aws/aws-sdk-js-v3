// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourceTelemetryCommand,
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput,
} from "../commands/ListResourceTelemetryCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceTelemetry: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListResourceTelemetryCommandInput,
  ...rest: any[]
) => Paginator<ListResourceTelemetryCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput
>(ObservabilityAdminClient, ListResourceTelemetryCommand, "NextToken", "NextToken", "MaxResults");
