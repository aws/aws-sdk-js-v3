// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateStepGroupsCommand,
  ListTemplateStepGroupsCommandInput,
  ListTemplateStepGroupsCommandOutput,
} from "../commands/ListTemplateStepGroupsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateStepGroups: (
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListTemplateStepGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateStepGroupsCommandOutput> = createPaginator<
  MigrationHubOrchestratorPaginationConfiguration,
  ListTemplateStepGroupsCommandInput,
  ListTemplateStepGroupsCommandOutput
>(MigrationHubOrchestratorClient, ListTemplateStepGroupsCommand, "nextToken", "nextToken", "maxResults");
