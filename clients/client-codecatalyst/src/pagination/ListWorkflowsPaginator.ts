// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflows: (
  config: CodeCatalystPaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowsCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput
>(CodeCatalystClient, ListWorkflowsCommand, "nextToken", "nextToken", "maxResults");
