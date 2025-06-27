// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourceTelemetryForOrganizationCommand,
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput,
} from "../commands/ListResourceTelemetryForOrganizationCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceTelemetryForOrganization: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListResourceTelemetryForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListResourceTelemetryForOrganizationCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput
>(ObservabilityAdminClient, ListResourceTelemetryForOrganizationCommand, "NextToken", "NextToken", "MaxResults");
