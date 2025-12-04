// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListSandboxesCommand,
  ListSandboxesCommandInput,
  ListSandboxesCommandOutput,
} from "../commands/ListSandboxesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSandboxes: (
  config: CodeBuildPaginationConfiguration,
  input: ListSandboxesCommandInput,
  ...rest: any[]
) => Paginator<ListSandboxesCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListSandboxesCommandInput,
  ListSandboxesCommandOutput
>(CodeBuildClient, ListSandboxesCommand, "nextToken", "nextToken", "maxResults");
