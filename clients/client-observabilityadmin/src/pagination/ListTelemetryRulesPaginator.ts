// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTelemetryRulesCommand,
  ListTelemetryRulesCommandInput,
  ListTelemetryRulesCommandOutput,
} from "../commands/ListTelemetryRulesCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTelemetryRules: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListTelemetryRulesCommandInput,
  ...rest: any[]
) => Paginator<ListTelemetryRulesCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListTelemetryRulesCommandInput,
  ListTelemetryRulesCommandOutput
>(ObservabilityAdminClient, ListTelemetryRulesCommand, "NextToken", "NextToken", "MaxResults");
