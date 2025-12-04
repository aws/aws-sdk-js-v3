// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClosedWorkflowExecutionsCommand,
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "../commands/ListClosedWorkflowExecutionsCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClosedWorkflowExecutions: (
  config: SWFPaginationConfiguration,
  input: ListClosedWorkflowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListClosedWorkflowExecutionsCommandOutput> = createPaginator<
  SWFPaginationConfiguration,
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput
>(SWFClient, ListClosedWorkflowExecutionsCommand, "nextPageToken", "nextPageToken", "maximumPageSize");
