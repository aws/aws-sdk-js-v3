// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTelemetryRulesForOrganizationCommand,
  ListTelemetryRulesForOrganizationCommandInput,
  ListTelemetryRulesForOrganizationCommandOutput,
} from "../commands/ListTelemetryRulesForOrganizationCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTelemetryRulesForOrganization: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListTelemetryRulesForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListTelemetryRulesForOrganizationCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListTelemetryRulesForOrganizationCommandInput,
  ListTelemetryRulesForOrganizationCommandOutput
>(ObservabilityAdminClient, ListTelemetryRulesForOrganizationCommand, "NextToken", "NextToken", "MaxResults");
