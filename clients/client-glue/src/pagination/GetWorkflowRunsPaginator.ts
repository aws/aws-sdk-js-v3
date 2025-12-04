// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetWorkflowRunsCommand,
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput,
} from "../commands/GetWorkflowRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetWorkflowRuns: (
  config: GluePaginationConfiguration,
  input: GetWorkflowRunsCommandInput,
  ...rest: any[]
) => Paginator<GetWorkflowRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetWorkflowRunsCommandInput,
  GetWorkflowRunsCommandOutput
>(GlueClient, GetWorkflowRunsCommand, "NextToken", "NextToken", "MaxResults");
