// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflows: (
  config: TransferPaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowsCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput
>(TransferClient, ListWorkflowsCommand, "NextToken", "NextToken", "MaxResults");
