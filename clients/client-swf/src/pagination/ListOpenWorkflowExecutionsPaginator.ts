// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpenWorkflowExecutionsCommand,
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "../commands/ListOpenWorkflowExecutionsCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpenWorkflowExecutions: (
  config: SWFPaginationConfiguration,
  input: ListOpenWorkflowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListOpenWorkflowExecutionsCommandOutput> = createPaginator<
  SWFPaginationConfiguration,
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput
>(SWFClient, ListOpenWorkflowExecutionsCommand, "nextPageToken", "nextPageToken", "maximumPageSize");
