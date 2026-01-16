// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentPatternVersionsCommand,
  ListDeploymentPatternVersionsCommandInput,
  ListDeploymentPatternVersionsCommandOutput,
} from "../commands/ListDeploymentPatternVersionsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentPatternVersions: (
  config: LaunchWizardPaginationConfiguration,
  input: ListDeploymentPatternVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentPatternVersionsCommandOutput> = createPaginator<
  LaunchWizardPaginationConfiguration,
  ListDeploymentPatternVersionsCommandInput,
  ListDeploymentPatternVersionsCommandOutput
>(LaunchWizardClient, ListDeploymentPatternVersionsCommand, "nextToken", "nextToken", "maxResults");
