// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOrganizationalUnitsCommand,
  ListOrganizationalUnitsCommandInput,
  ListOrganizationalUnitsCommandOutput,
} from "../commands/ListOrganizationalUnitsCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import type { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOrganizationalUnits: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListOrganizationalUnitsCommandInput,
  ...rest: any[]
) => Paginator<ListOrganizationalUnitsCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListOrganizationalUnitsCommandInput,
  ListOrganizationalUnitsCommandOutput
>(ComputeOptimizerAutomationClient, ListOrganizationalUnitsCommand, "nextToken", "nextToken", "maxResults");
