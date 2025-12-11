// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWaitingWorkflowStepsCommand,
  ListWaitingWorkflowStepsCommandInput,
  ListWaitingWorkflowStepsCommandOutput,
} from "../commands/ListWaitingWorkflowStepsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWaitingWorkflowSteps: (
  config: ImagebuilderPaginationConfiguration,
  input: ListWaitingWorkflowStepsCommandInput,
  ...rest: any[]
) => Paginator<ListWaitingWorkflowStepsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListWaitingWorkflowStepsCommandInput,
  ListWaitingWorkflowStepsCommandOutput
>(ImagebuilderClient, ListWaitingWorkflowStepsCommand, "nextToken", "nextToken", "maxResults");
