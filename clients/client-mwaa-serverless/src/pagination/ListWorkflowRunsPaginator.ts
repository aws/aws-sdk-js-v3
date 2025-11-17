// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListWorkflowRunsCommand,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput,
} from "../commands/ListWorkflowRunsCommand";
import { MWAAServerlessClient } from "../MWAAServerlessClient";
import { MWAAServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowRuns: (
  config: MWAAServerlessPaginationConfiguration,
  input: ListWorkflowRunsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowRunsCommandOutput> = createPaginator<
  MWAAServerlessPaginationConfiguration,
  ListWorkflowRunsCommandInput,
  ListWorkflowRunsCommandOutput
>(MWAAServerlessClient, ListWorkflowRunsCommand, "NextToken", "NextToken", "MaxResults");
