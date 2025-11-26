// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildsForProjectCommand,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "../commands/ListBuildsForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuildsForProject: (
  config: CodeBuildPaginationConfiguration,
  input: ListBuildsForProjectCommandInput,
  ...rest: any[]
) => Paginator<ListBuildsForProjectCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput
>(CodeBuildClient, ListBuildsForProjectCommand, "nextToken", "nextToken", "");
