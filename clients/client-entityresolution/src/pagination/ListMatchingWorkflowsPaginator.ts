// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMatchingWorkflowsCommand,
  ListMatchingWorkflowsCommandInput,
  ListMatchingWorkflowsCommandOutput,
} from "../commands/ListMatchingWorkflowsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMatchingWorkflows: (
  config: EntityResolutionPaginationConfiguration,
  input: ListMatchingWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListMatchingWorkflowsCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListMatchingWorkflowsCommandInput,
  ListMatchingWorkflowsCommandOutput
>(EntityResolutionClient, ListMatchingWorkflowsCommand, "nextToken", "nextToken", "maxResults");
