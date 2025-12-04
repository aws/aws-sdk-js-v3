// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLifecycleExecutionResourcesCommand,
  ListLifecycleExecutionResourcesCommandInput,
  ListLifecycleExecutionResourcesCommandOutput,
} from "../commands/ListLifecycleExecutionResourcesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLifecycleExecutionResources: (
  config: ImagebuilderPaginationConfiguration,
  input: ListLifecycleExecutionResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListLifecycleExecutionResourcesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListLifecycleExecutionResourcesCommandInput,
  ListLifecycleExecutionResourcesCommandOutput
>(ImagebuilderClient, ListLifecycleExecutionResourcesCommand, "nextToken", "nextToken", "maxResults");
