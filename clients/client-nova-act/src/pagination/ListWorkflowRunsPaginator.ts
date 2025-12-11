// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowRunsCommand,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput,
} from "../commands/ListWorkflowRunsCommand";
import { NovaActClient } from "../NovaActClient";
import { NovaActPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowRuns: (
  config: NovaActPaginationConfiguration,
  input: ListWorkflowRunsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowRunsCommandOutput> = createPaginator<
  NovaActPaginationConfiguration,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput
>(NovaActClient, ListWorkflowRunsCommand, "nextToken", "nextToken", "maxResults");
