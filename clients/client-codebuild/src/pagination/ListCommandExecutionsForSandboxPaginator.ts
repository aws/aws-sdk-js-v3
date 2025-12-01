// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListCommandExecutionsForSandboxCommand,
  ListCommandExecutionsForSandboxCommandInput,
  ListCommandExecutionsForSandboxCommandOutput,
} from "../commands/ListCommandExecutionsForSandboxCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCommandExecutionsForSandbox: (
  config: CodeBuildPaginationConfiguration,
  input: ListCommandExecutionsForSandboxCommandInput,
  ...rest: any[]
) => Paginator<ListCommandExecutionsForSandboxCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListCommandExecutionsForSandboxCommandInput,
  ListCommandExecutionsForSandboxCommandOutput
>(CodeBuildClient, ListCommandExecutionsForSandboxCommand, "nextToken", "nextToken", "maxResults");
