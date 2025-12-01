// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowStepsCommand,
  ListWorkflowStepsCommandInput,
  ListWorkflowStepsCommandOutput,
} from "../commands/ListWorkflowStepsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowSteps: (
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListWorkflowStepsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowStepsCommandOutput> = createPaginator<
  MigrationHubOrchestratorPaginationConfiguration,
  ListWorkflowStepsCommandInput,
  ListWorkflowStepsCommandOutput
>(MigrationHubOrchestratorClient, ListWorkflowStepsCommand, "nextToken", "nextToken", "maxResults");
