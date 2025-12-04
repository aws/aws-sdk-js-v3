// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowVersionsCommand,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput,
} from "../commands/ListWorkflowVersionsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowVersions: (
  config: OmicsPaginationConfiguration,
  input: ListWorkflowVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowVersionsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListWorkflowVersionsCommandInput,
  ListWorkflowVersionsCommandOutput
>(OmicsClient, ListWorkflowVersionsCommand, "startingToken", "nextToken", "maxResults");
