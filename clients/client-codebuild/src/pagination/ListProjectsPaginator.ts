// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: CodeBuildPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(CodeBuildClient, ListProjectsCommand, "nextToken", "nextToken", "");
