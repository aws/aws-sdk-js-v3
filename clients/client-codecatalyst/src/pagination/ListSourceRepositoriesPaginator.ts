// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListSourceRepositoriesCommand,
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput,
} from "../commands/ListSourceRepositoriesCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceRepositories: (
  config: CodeCatalystPaginationConfiguration,
  input: ListSourceRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<ListSourceRepositoriesCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListSourceRepositoriesCommandInput,
  ListSourceRepositoriesCommandOutput
>(CodeCatalystClient, ListSourceRepositoriesCommand, "nextToken", "nextToken", "maxResults");
