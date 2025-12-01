// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentEventsCommand,
  ListDeploymentEventsCommandInput,
  ListDeploymentEventsCommandOutput,
} from "../commands/ListDeploymentEventsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentEvents: (
  config: LaunchWizardPaginationConfiguration,
  input: ListDeploymentEventsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentEventsCommandOutput> = createPaginator<
  LaunchWizardPaginationConfiguration,
  ListDeploymentEventsCommandInput,
  ListDeploymentEventsCommandOutput
>(LaunchWizardClient, ListDeploymentEventsCommand, "nextToken", "nextToken", "maxResults");
