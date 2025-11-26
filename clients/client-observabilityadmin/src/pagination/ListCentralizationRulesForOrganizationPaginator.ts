// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCentralizationRulesForOrganizationCommand,
  ListCentralizationRulesForOrganizationCommandInput,
  ListCentralizationRulesForOrganizationCommandOutput,
} from "../commands/ListCentralizationRulesForOrganizationCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCentralizationRulesForOrganization: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListCentralizationRulesForOrganizationCommandInput,
  ...rest: any[]
) => Paginator<ListCentralizationRulesForOrganizationCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListCentralizationRulesForOrganizationCommandInput,
  ListCentralizationRulesForOrganizationCommandOutput
>(ObservabilityAdminClient, ListCentralizationRulesForOrganizationCommand, "NextToken", "NextToken", "MaxResults");
