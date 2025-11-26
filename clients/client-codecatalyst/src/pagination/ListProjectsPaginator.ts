// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: CodeCatalystPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(CodeCatalystClient, ListProjectsCommand, "nextToken", "nextToken", "maxResults");
