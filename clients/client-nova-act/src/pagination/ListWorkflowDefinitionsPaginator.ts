// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowDefinitionsCommand,
  ListWorkflowDefinitionsCommandInput,
  ListWorkflowDefinitionsCommandOutput,
} from "../commands/ListWorkflowDefinitionsCommand";
import { NovaActClient } from "../NovaActClient";
import { NovaActPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowDefinitions: (
  config: NovaActPaginationConfiguration,
  input: ListWorkflowDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowDefinitionsCommandOutput> = createPaginator<
  NovaActPaginationConfiguration,
  ListWorkflowDefinitionsCommandInput,
  ListWorkflowDefinitionsCommandOutput
>(NovaActClient, ListWorkflowDefinitionsCommand, "nextToken", "nextToken", "maxResults");
