// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeployments: (
  config: LaunchWizardPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentsCommandOutput> = createPaginator<
  LaunchWizardPaginationConfiguration,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
>(LaunchWizardClient, ListDeploymentsCommand, "nextToken", "nextToken", "maxResults");
