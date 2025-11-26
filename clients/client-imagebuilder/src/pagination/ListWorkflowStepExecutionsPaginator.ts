// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowStepExecutionsCommand,
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
} from "../commands/ListWorkflowStepExecutionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowStepExecutions: (
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowStepExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowStepExecutionsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput
>(ImagebuilderClient, ListWorkflowStepExecutionsCommand, "nextToken", "nextToken", "maxResults");
