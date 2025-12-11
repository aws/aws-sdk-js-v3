// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkflowBuildVersionsCommand,
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput,
} from "../commands/ListWorkflowBuildVersionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkflowBuildVersions: (
  config: ImagebuilderPaginationConfiguration,
  input: ListWorkflowBuildVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListWorkflowBuildVersionsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput
>(ImagebuilderClient, ListWorkflowBuildVersionsCommand, "nextToken", "nextToken", "maxResults");
