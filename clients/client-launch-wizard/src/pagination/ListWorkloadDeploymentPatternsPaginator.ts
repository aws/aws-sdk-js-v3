// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadDeploymentPatternsCommandInput,
  ListWorkloadDeploymentPatternsCommandOutput,
} from "../commands/ListWorkloadDeploymentPatternsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloadDeploymentPatterns: (
  config: LaunchWizardPaginationConfiguration,
  input: ListWorkloadDeploymentPatternsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadDeploymentPatternsCommandOutput> = createPaginator<
  LaunchWizardPaginationConfiguration,
  ListWorkloadDeploymentPatternsCommandInput,
  ListWorkloadDeploymentPatternsCommandOutput
>(LaunchWizardClient, ListWorkloadDeploymentPatternsCommand, "nextToken", "nextToken", "maxResults");
