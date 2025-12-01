// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowStepGroupsCommand,
  ListWorkflowStepGroupsCommandInput,
  ListWorkflowStepGroupsCommandOutput,
} from "../commands/ListWorkflowStepGroupsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowStepGroups: (
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListWorkflowStepGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowStepGroupsCommandOutput> = createPaginator<
  MigrationHubOrchestratorPaginationConfiguration,
  ListWorkflowStepGroupsCommandInput,
  ListWorkflowStepGroupsCommandOutput
>(MigrationHubOrchestratorClient, ListWorkflowStepGroupsCommand, "nextToken", "nextToken", "maxResults");
