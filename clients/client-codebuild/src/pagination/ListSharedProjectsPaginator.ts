// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSharedProjectsCommand,
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput,
} from "../commands/ListSharedProjectsCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSharedProjects: (
  config: CodeBuildPaginationConfiguration,
  input: ListSharedProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListSharedProjectsCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput
>(CodeBuildClient, ListSharedProjectsCommand, "nextToken", "nextToken", "maxResults");
