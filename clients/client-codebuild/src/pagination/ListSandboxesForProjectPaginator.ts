// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSandboxesForProjectCommand,
  ListSandboxesForProjectCommandInput,
  ListSandboxesForProjectCommandOutput,
} from "../commands/ListSandboxesForProjectCommand";
import type { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSandboxesForProject: (
  config: CodeBuildPaginationConfiguration,
  input: ListSandboxesForProjectCommandInput,
  ...rest: any[]
) => Paginator<ListSandboxesForProjectCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListSandboxesForProjectCommandInput,
  ListSandboxesForProjectCommandOutput
>(CodeBuildClient, ListSandboxesForProjectCommand, "nextToken", "nextToken", "maxResults");
