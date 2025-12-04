// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateStepsCommand,
  ListTemplateStepsCommandInput,
  ListTemplateStepsCommandOutput,
} from "../commands/ListTemplateStepsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateSteps: (
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListTemplateStepsCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateStepsCommandOutput> = createPaginator<
  MigrationHubOrchestratorPaginationConfiguration,
  ListTemplateStepsCommandInput,
  ListTemplateStepsCommandOutput
>(MigrationHubOrchestratorClient, ListTemplateStepsCommand, "nextToken", "nextToken", "maxResults");
