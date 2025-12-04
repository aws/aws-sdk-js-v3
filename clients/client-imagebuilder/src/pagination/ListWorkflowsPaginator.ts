// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "../commands/ListWorkflowsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflows: (
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput
>(ImagebuilderClient, ListWorkflowsCommand, "nextToken", "nextToken", "maxResults");
