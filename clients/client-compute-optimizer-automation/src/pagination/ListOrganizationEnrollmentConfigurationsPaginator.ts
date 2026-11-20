// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationEnrollmentConfigurationsCommand,
  ListOrganizationEnrollmentConfigurationsCommandInput,
  ListOrganizationEnrollmentConfigurationsCommandOutput,
} from "../commands/ListOrganizationEnrollmentConfigurationsCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import type { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationEnrollmentConfigurations: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListOrganizationEnrollmentConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationEnrollmentConfigurationsCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListOrganizationEnrollmentConfigurationsCommandInput,
  ListOrganizationEnrollmentConfigurationsCommandOutput
>(ComputeOptimizerAutomationClient, ListOrganizationEnrollmentConfigurationsCommand, "nextToken", "nextToken", "maxResults");
