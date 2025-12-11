// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportFileTaskCommand,
  ListImportFileTaskCommandInput,
  ListImportFileTaskCommandOutput,
} from "../commands/ListImportFileTaskCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportFileTask: (
  config: MigrationHubStrategyPaginationConfiguration,
  input: ListImportFileTaskCommandInput,
  ...rest: any[]
) => Paginator<ListImportFileTaskCommandOutput> = createPaginator<
  MigrationHubStrategyPaginationConfiguration,
  ListImportFileTaskCommandInput,
  ListImportFileTaskCommandOutput
>(MigrationHubStrategyClient, ListImportFileTaskCommand, "nextToken", "nextToken", "maxResults");
