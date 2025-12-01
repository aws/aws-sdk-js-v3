// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplates: (
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplatesCommandOutput> = createPaginator<
  MigrationHubOrchestratorPaginationConfiguration,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
>(MigrationHubOrchestratorClient, ListTemplatesCommand, "nextToken", "nextToken", "maxResults");
