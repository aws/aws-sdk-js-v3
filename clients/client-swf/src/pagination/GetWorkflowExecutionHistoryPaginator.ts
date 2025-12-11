// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetWorkflowExecutionHistoryCommand,
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "../commands/GetWorkflowExecutionHistoryCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetWorkflowExecutionHistory: (
  config: SWFPaginationConfiguration,
  input: GetWorkflowExecutionHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetWorkflowExecutionHistoryCommandOutput> = createPaginator<
  SWFPaginationConfiguration,
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput
>(SWFClient, GetWorkflowExecutionHistoryCommand, "nextPageToken", "nextPageToken", "maximumPageSize");
