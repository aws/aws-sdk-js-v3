// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListWorkflowRunsCommand,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput,
} from "../commands/ListWorkflowRunsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowRuns: (
  config: CodeCatalystPaginationConfiguration,
  input: ListWorkflowRunsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowRunsCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput
>(CodeCatalystClient, ListWorkflowRunsCommand, "nextToken", "nextToken", "maxResults");
