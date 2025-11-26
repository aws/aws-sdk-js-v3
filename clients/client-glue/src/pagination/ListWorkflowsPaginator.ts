// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflows: (
  config: GluePaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput
>(GlueClient, ListWorkflowsCommand, "NextToken", "NextToken", "MaxResults");
