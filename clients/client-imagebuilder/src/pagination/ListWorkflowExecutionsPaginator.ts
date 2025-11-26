// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowExecutionsCommand,
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput,
} from "../commands/ListWorkflowExecutionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowExecutions: (
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowExecutionsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput
>(ImagebuilderClient, ListWorkflowExecutionsCommand, "nextToken", "nextToken", "maxResults");
