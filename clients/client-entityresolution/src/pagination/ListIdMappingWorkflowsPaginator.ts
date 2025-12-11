// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdMappingWorkflowsCommand,
  ListIdMappingWorkflowsCommandInput,
  ListIdMappingWorkflowsCommandOutput,
} from "../commands/ListIdMappingWorkflowsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdMappingWorkflows: (
  config: EntityResolutionPaginationConfiguration,
  input: ListIdMappingWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListIdMappingWorkflowsCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListIdMappingWorkflowsCommandInput,
  ListIdMappingWorkflowsCommandOutput
>(EntityResolutionClient, ListIdMappingWorkflowsCommand, "nextToken", "nextToken", "maxResults");
