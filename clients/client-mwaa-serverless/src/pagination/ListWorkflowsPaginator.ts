// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { MWAAServerlessClient } from "../MWAAServerlessClient";
import { MWAAServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflows: (
  config: MWAAServerlessPaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowsCommandOutput> = createPaginator<
  MWAAServerlessPaginationConfiguration,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput
>(MWAAServerlessClient, ListWorkflowsCommand, "NextToken", "NextToken", "MaxResults");
